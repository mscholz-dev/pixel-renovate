import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import axios from "axios";
import SupportValidatorClass from "@/utils/validators/SupportValidator";

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

      await axios.post(
        `https://discord.com/api/webhooks/${process.env.WEBHOOK_SUPPORT}`,
        {
          content: `
**Nom et prénom :** ${req.body.fullName}
**Email :** ${req.body.email}
**Mobiles :** ${req.body.phone}

**Code postal :** ${req.body.postalCode}
**Ville :** ${req.body.city}

**Type d'appareil :** ${req.body.deviceType}
**Marque :** ${req.body.brand}
**Modèle :** ${req.body.model}

**Prestation :** ${req.body.service}
**Description de la panne :**
${req.body.breakdown}
          `,
        },
      );

      return res.status(200).end();
    }
  } catch (err: unknown) {
    return res.status(400).json({
      err: "something went wrong",
    });
  }
};

export default supports;
