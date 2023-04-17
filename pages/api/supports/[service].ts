import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import axios from "axios";
import SupportValidatorClass from "@/utils/validators/SupportValidator";

// services data
import computersData from "@/utils/data/services/computers";
import consolesData from "@/utils/data/services/consoles";
import mobilesData from "@/utils/data/services/mobiles";
import webData from "@/utils/data/services/web";
import keyboardsData from "@/utils/data/services/keyboards";

// classes
import MongoDB from "@/utils/MongoDB";
import { TSupportForm } from "@/utils/types";
const SupportValidator =
  new SupportValidatorClass();

const supports = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> => {
  try {
    // POST request
    if (req.method === "POST") {
      const { service } = req.query;

      const {
        fullName,
        email,
        phone,
        postalCode,
        city,
        brand,
        model,
        title,
        description,
        consent,
      }: TSupportForm = req.body;

      // validate data
      const errors =
        SupportValidator.inspectSupportData(
          req.body,
          service as string,
        );

      // throw errors
      if (errors.length)
        return res
          .status(400)
          .json({ err: errors });

      let webhook = null;
      let serviceName = "";

      switch (service) {
        case computersData.service:
          webhook = process.env.WEBHOOK_COMPUTERS;
          serviceName = computersData.service;
          break;

        case consolesData.service:
          webhook = process.env.WEBHOOK_CONSOLES;
          serviceName = consolesData.service;
          break;

        case mobilesData.service:
          webhook = process.env.WEBHOOK_MOBILES;
          serviceName = mobilesData.service;
          break;

        case webData.service:
          webhook = process.env.WEBHOOK_WEB;
          serviceName = webData.service;
          break;

        case keyboardsData.service:
          webhook = process.env.WEBHOOK_KEYBOARDS;
          serviceName = keyboardsData.service;
          break;

        case "general":
          webhook = process.env.WEBHOOK_GENERAL;
          break;

        default:
          return res.status(404).end();
      }

      // create discord request
      await axios.post(
        `https://discord.com/api/webhooks/${webhook}`,
        {
          content: `
**Nom et prénom :** ${fullName}
**Email :** ${email}
**Numéro de téléphone :** ${phone}

**Code postal :** ${postalCode}
**Ville :** ${city}
${
  service === computersData.service ||
  service === consolesData.service ||
  service === mobilesData.service ||
  service === keyboardsData.service
    ? `
**Marque :** ${brand}
**Modèle :** ${model}
  `
    : ``
}
**Prestation :** ${title}
**Description :**
${description}
          `,
        },
      );

      // store request in database
      const client =
        await MongoDB.clientPromise();
      const db = client.db(
        `pixel_renovate${
          process.env.NODEENV === "dev"
            ? "_dev"
            : ""
        }`,
      );

      await db.collection("support").insertOne({
        serviceName,
        fullName,
        email,
        phone,
        postalCode,
        city,
        brand,
        model,
        title,
        description,
        consent,
      });

      return res.status(200).end();
    }
  } catch (err: unknown) {
    console.error(err);
    return res.status(400).json({
      err: err,
    });
  }
};

export default supports;
