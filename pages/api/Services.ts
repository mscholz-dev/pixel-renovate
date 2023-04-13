import { Client } from "@notionhq/client";
import NotionErrorClass from "@/utils/NotionError";

// classes
const NotionError = new NotionErrorClass();

// types
import {
  TGetServicesReturn,
  TGetSpecificServiceReturn,
  TContentService,
} from "@/utils/types";

export default class ServicesApi {
  static async getServices(
    category: string,
  ): Promise<TGetServicesReturn> {
    try {
      // is valid category
      if (
        category !== "Ordinateur" &&
        category !== "Console" &&
        category !== "Téléphone"
      )
        throw new Error("category invalid");

      // init notion connection
      const notion = new Client({
        auth: process.env.NOTION_TOKEN,
      });

      // get data
      const data = await notion.databases.query({
        database_id: process.env
          .DATABASE_SERVICE_ID as string,
        filter: {
          property: "Catégorie",
          select: {
            equals: category,
          },
        },
        sorts: [
          {
            timestamp: "created_time",
            direction: "ascending",
          },
        ],
      });

      // format data
      const results = [];
      for (const item of data.results as any[]) {
        results.push({
          id: item.id,
          imgSrc: item.cover.file.url,
          title:
            item.properties["Nom"].title[0]
              .plain_text,
          time: item.properties["Temps estimé"]
            .rich_text[0].plain_text,
          price:
            item.properties["À partir de"]
              .rich_text[0].plain_text,
          url: item.properties["url"].rich_text[0]
            .plain_text,
        });
      }

      return {
        data: results,
        err: null,
      };
    } catch (err: unknown) {
      return {
        data: [],
        err: NotionError.handleError(err),
      };
    }
  }

  static async getSpecificService(
    url: string,
  ): Promise<TGetSpecificServiceReturn> {
    try {
      // init notion connection
      const notion = new Client({
        auth: process.env.NOTION_TOKEN,
      });

      // get block id
      const data = await notion.databases.query({
        database_id: process.env
          .DATABASE_SERVICE_ID as string,
        filter: {
          property: "url",
          rich_text: {
            equals: url,
          },
        },
      });

      // get content
      const contentResult =
        await notion.blocks.children.list({
          block_id: data.results[0].id || "",
        });

      const content: TContentService = [];

      for (const item of contentResult.results as any) {
        // is content not empty
        if (item[item.type].rich_text.length) {
          switch (item.type) {
            case "heading_3":
              content.push({
                type: "h3",
                value:
                  item.heading_3.rich_text[0]
                    .plain_text || "",
              });
              break;

            case "paragraph":
              content.push({
                type: "p",
                value:
                  item.paragraph.rich_text[0]
                    .plain_text,
              });
              break;

            default:
              break;
          }
        }
      }

      return {
        data: {
          imgSrc: (data.results as any[])[0].cover
            .file.url,
          title: (data.results as any[])[0]
            .properties["Nom"].title[0]
            .plain_text,
          time: (data.results as any[])[0]
            .properties["Temps estimé"]
            .rich_text[0].plain_text,
          price: (data.results as any[])[0]
            .properties["À partir de"]
            .rich_text[0].plain_text,
          content,
        },
        err: null,
      };
    } catch (err: unknown) {
      return {
        data: null,
        err: NotionError.handleError(err),
      };
    }
  }
}
