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

      switch (service) {
        case computersData.service:
          webhook = process.env.WEBHOOK_COMPUTERS;
          break;

        case consolesData.service:
          webhook = process.env.WEBHOOK_CONSOLES;
          break;

        case mobilesData.service:
          webhook = process.env.WEBHOOK_MOBILES;
          break;

        case webData.service:
          webhook = process.env.WEBHOOK_WEB;
          break;

        case keyboardsData.service:
          webhook = process.env.WEBHOOK_KEYBOARDS;
          break;

        default:
          webhook = process.env.WEBHOOK_GENERAL;
          break;
      }

      await axios.post(
        `https://discord.com/api/webhooks/${webhook}`,
        {
          content: `
**Nom et prénom :** ${req.body.fullName}
**Email :** ${req.body.email}
**Numéro de téléphone :** ${req.body.phone}

**Code postal :** ${req.body.postalCode}
**Ville :** ${req.body.city}
${
  service === computersData.service ||
  service === consolesData.service ||
  service === mobilesData.service ||
  service === keyboardsData.service
    ? `
**Type d'appareil :** ${req.body.serviceType}
**Marque :** ${req.body.brand}
**Modèle :** ${req.body.model}
  `
    : ``
}
**Prestation :** ${req.body.title}
**Description :**
${req.body.description}
          `,
        },
      );

      return res.status(200).end();
    }
  } catch (err: unknown) {
    console.error(err);
    return res.status(400).json({
      err: "something went wrong",
    });
  }
};

export default supports;
