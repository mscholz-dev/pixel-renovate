import { GetServerSidePropsContext } from "next";

// services data
import computersData from "@/utils/data/services/computers";
import consolesData from "@/utils/data/services/consoles";
import mobilesData from "@/utils/data/services/mobiles";
import webData from "@/utils/data/services/web";
import keyboardsData from "@/utils/data/services/keyboards";

const Sitemap = () => {};

export default Sitemap;

export const getServerSideProps = ({
  res,
}: GetServerSidePropsContext) => {
  const urls: string[] = [];

  // basic urls
  urls.push("");
  urls.push("/mentions-legales");
  urls.push("/404");

  // computers urls
  const computersService = computersData.service;
  urls.push(`/${computersService}`);
  urls.push(
    `/demande-de-prise-en-charge/${computersService}`,
  );

  for (const { url } of computersData.data) {
    urls.push(`/${computersService}/${url}`);
  }

  // consoles urls
  const consolesService = consolesData.service;
  urls.push(`/${consolesService}`);
  urls.push(
    `/demande-de-prise-en-charge/${consolesService}`,
  );

  for (const { url } of consolesData.data) {
    urls.push(`/${consolesService}/${url}`);
  }

  // mobiles urls
  const mobilesService = mobilesData.service;
  urls.push(`/${mobilesService}`);
  urls.push(
    `/demande-de-prise-en-charge/${mobilesService}`,
  );

  for (const { url } of mobilesData.data) {
    urls.push(`/${mobilesService}/${url}`);
  }

  // web urls
  const webService = webData.service;
  urls.push(`/${webService}`);
  urls.push(
    `/demande-de-prise-en-charge/${webService}`,
  );

  for (const { url } of webData.data) {
    urls.push(`/${webService}/${url}`);
  }

  // keyboards urls
  const keyboardsService = keyboardsData.service;
  urls.push(`/${keyboardsService}`);
  urls.push(
    `/demande-de-prise-en-charge/${keyboardsService}`,
  );

  for (const { url } of keyboardsData.data) {
    urls.push(`/${keyboardsService}/${url}`);
  }

  // generate xml
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map((url) => {
          return `
        <url>
            <loc>https://pixel-renovate.com${url}</loc>
        </url>
      `;
        })
        .join("")}
    </urlset>
  `;

  // we send the XML to the browser
  res.setHeader("Content-Type", "text/xml");
  res.write(xml);
  res.end();

  return {
    props: {},
  };
};
