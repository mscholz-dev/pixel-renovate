import Validator from "./Validator";
import RegexClass from "../Regex";

// classes
const Regex = new RegexClass();

// types
import { TSupportForm } from "../types";

export default class SupportValidator extends Validator {
  inspectSupportData(schema: TSupportForm) {
    const errors = this.inspectData(
      schema,
      this.errorMessage,
    );

    return errors;
  }

  errorMessage(
    id: string,
    value: string,
  ): string {
    switch (id) {
      // fullName
      case "fullName":
        if (!value)
          return "Le champ Nom et prénom est requis";
        if (value.length > 60)
          return "Le champ Nom et prénom ne doit pas dépasser 60 caractères";
        return "";

      // email
      case "email":
        if (!value)
          return "Le champ Email est requis";
        if (value.length > 255)
          return "Le champ Email ne doit pas dépasser 255 caractères";
        if (!Regex.email(value))
          return "Le champ Email est invalide";
        return "";

      // phone
      case "phone":
        if (!value)
          return "Le champ Numéro de téléphone est requis";
        if (!Regex.phone(value))
          return "Le champ Numéro de téléphone est invalide";
        return "";

      // postalCode
      case "postalCode":
        if (!value)
          return "Le champ Code postal est requis";
        if (!Regex.postalCode(value))
          return "Le champ Code postal est invalide";
        return "";

      // city
      case "city":
        if (!value)
          return "Le champ Ville est requis";
        if (value.length > 60)
          return "Le champ Ville ne doit pas dépasser 60 caractères";
        return "";

      // deviceType
      case "deviceType":
        if (!value)
          return "Le champ Type d'appareil est requis";
        if (value.length > 60)
          return "Le champ Type d'appareil ne doit pas dépasser 60 caractères";
        return "";

      // brand
      case "brand":
        if (!value)
          return "Le champ Marque est requis";
        if (value.length > 60)
          return "Le champ Marque ne doit pas dépasser 60 caractères";
        return "";

      // model
      case "model":
        if (!value)
          return "Le champ Modèle est requis";
        if (value.length > 60)
          return "Le champ Modèle ne doit pas dépasser 60 caractères";
        return "";

      // service
      case "service":
        if (!value)
          return "Le champ Prestation est requis";
        if (value.length > 255)
          return "Le champ Prestation ne doit pas dépasser 255 caractères";
        return "";

      // breakdown
      case "breakdown":
        if (!value)
          return "Le champ Description de la panne est requis";
        if (value.length > 5_000)
          return "Le champ Description de la panne ne doit pas dépasser 5 000 caractères";
        return "";

      // consent
      case "consent":
        if (typeof value !== "boolean" || !value)
          return "Vous devez accepter que vos données soient traitées dans le cadre de votre demande";
        return "";

      default:
        return "Une erreur est survenu";
    }
  }
}
