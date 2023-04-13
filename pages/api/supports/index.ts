import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import { Client } from "@notionhq/client";
import NotionErrorClass from "@/utils/NotionError";
import SupportValidatorClass from "@/utils/validators/SupportValidator";

// classes
const NotionError = new NotionErrorClass();
const SupportValidator =
  new SupportValidatorClass();

const supports = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> => {
  try {
    // POST request
    if (req.method === "POST") {
      // validate data
      const errors =
        SupportValidator.inspectSupportData(
          req.body,
        );

      // throw errors
      if (errors.length)
        return res
          .status(400)
          .json({ err: errors });

      // init notion connection
      const notion = new Client({
        auth: process.env.NOTION_TOKEN,
      });

      await notion.pages.create({
        parent: {
          type: "database_id",
          database_id: process.env
            .DATABASE_SUPPORT_ID as string,
        },
        properties: {
          "Nom et prénom": {
            title: [
              {
                text: {
                  content: req.body.fullName,
                },
              },
            ],
          },
          Email: {
            rich_text: [
              {
                text: { content: req.body.email },
              },
            ],
          },
          Téléphone: {
            rich_text: [
              {
                text: { content: req.body.phone },
              },
            ],
          },
          "Code postal": {
            rich_text: [
              {
                text: {
                  content: req.body.postalCode,
                },
              },
            ],
          },
          Ville: {
            rich_text: [
              {
                text: { content: req.body.city },
              },
            ],
          },
          "Type d'appareil": {
            rich_text: [
              {
                text: {
                  content: req.body.deviceType,
                },
              },
            ],
          },
          Marque: {
            rich_text: [
              {
                text: { content: req.body.brand },
              },
            ],
          },
          Modèle: {
            rich_text: [
              {
                text: { content: req.body.model },
              },
            ],
          },
          Prestation: {
            rich_text: [
              {
                text: {
                  content: req.body.service,
                },
              },
            ],
          },
          "Description de la panne": {
            rich_text: [
              {
                text: {
                  content: req.body.breakdown,
                },
              },
            ],
          },
          "Consentement pour le traitement des données":
            {
              checkbox: req.body.consent,
            },
        },
      });

      return res.status(200).end();
    }
  } catch (err: unknown) {
    return res.status(400).json({
      err: NotionError.handleError(err),
    });
  }
};

export default supports;
