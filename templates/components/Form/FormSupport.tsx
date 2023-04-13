import React, {
  FC,
  SyntheticEvent,
  useState,
  ChangeEvent,
} from "react";
import FormInput from "@/templates/components/Form/FormInput";
import FormCheckbox from "@/templates/components/Form/FormCheckbox";
import FormTextarea from "@/templates/components/Form/FormTextarea";
import Wrapper from "@/templates/layouts/Wrapper";
import IconUser from "@/public/icons/user.svg";
import IconContact from "@/public/icons/contact.svg";
import IconPhone from "@/public/icons/phone.svg";
import IconEnvelopes from "@/public/icons/envelopes.svg";
import IconCity from "@/public/icons/city.svg";
import IconMagnifyingGlass from "@/public/icons/magnifying-glass.svg";
import FormClass from "@/utils/Form";
import SupportValidatorClass from "@/utils/validators/SupportValidator";
import { toast } from "react-toastify";
import IconLoader from "@/public/icons/loader.svg";
import axios from "axios";
import IconBellConcierge from "@/public/icons/bell-concierge.svg";
import FormPage from "./FormPage";

// classes
const Form = new FormClass();
const SupportValidator =
  new SupportValidatorClass();

// types
import {
  TFormInput,
  TSupportForm,
  TTypeServiceProps,
} from "@/utils/types";

const FormSupport: FC<TTypeServiceProps> = ({
  type,
  service,
}) => {
  const [loading, setLoading] =
    useState<boolean>(false);

  const defaultForm = {
    fullName: "",
    email: "",
    phone: "",
    postalCode: "",
    city: "",
    deviceType: "",
    brand: "",
    model: "",
    service: "",
    breakdown: "",
    consent: false,
  };

  const [form, setForm] = useState<TSupportForm>({
    ...defaultForm,
    deviceType: type,
    service,
  });

  const formInputs: TFormInput[] = [
    {
      icon: <IconUser />,
      id: "fullName",
      handleChange: (e: ChangeEvent) =>
        Form.handleChange(
          e,
          "fullName",
          setForm,
          form,
        ),
      label: "Nom et prénom",
      type: "text",
      value: form.fullName,
      min: 0,
      max: 60,
      ariaDescribedby: "",
    },
    {
      icon: <IconContact />,
      id: "email",
      handleChange: (e: ChangeEvent) =>
        Form.handleChange(
          e,
          "email",
          setForm,
          form,
        ),
      label: "Email",
      type: "email",
      value: form.email,
      min: 0,
      max: 255,
      ariaDescribedby: "",
    },
    {
      icon: <IconPhone />,
      id: "phone",
      handleChange: (e: ChangeEvent) =>
        Form.handleChange(
          e,
          "phone",
          setForm,
          form,
        ),
      label: "Numéro de téléphone",
      type: "number",
      value: form.phone,
      min: 0,
      max: 10,
      ariaDescribedby: "",
    },
    {
      icon: <IconEnvelopes />,
      id: "postalCode",
      handleChange: (e: ChangeEvent) =>
        Form.handleChange(
          e,
          "postalCode",
          setForm,
          form,
        ),
      label: "Code postal",
      type: "number",
      value: form.postalCode,
      min: 0,
      max: 5,
      ariaDescribedby: "",
    },
    {
      icon: <IconCity />,
      id: "city",
      handleChange: (e: ChangeEvent) =>
        Form.handleChange(
          e,
          "city",
          setForm,
          form,
        ),
      label: "Ville",
      type: "text",
      value: form.city,
      min: 0,
      max: 60,
      ariaDescribedby: "",
    },
    {
      icon: <IconMagnifyingGlass />,
      id: "deviceType",
      handleChange: (e: ChangeEvent) =>
        Form.handleChange(
          e,
          "deviceType",
          setForm,
          form,
        ),
      label: "Type d'appareil",
      type: "text",
      value: form.deviceType,
      min: 0,
      max: 60,
      ariaDescribedby: "",
    },
    {
      icon: <IconMagnifyingGlass />,
      id: "brand",
      handleChange: (e: ChangeEvent) =>
        Form.handleChange(
          e,
          "brand",
          setForm,
          form,
        ),
      label: "Marque",
      type: "text",
      value: form.brand,
      min: 0,
      max: 60,
      ariaDescribedby: "",
    },
    {
      icon: <IconMagnifyingGlass />,
      id: "model",
      handleChange: (e: ChangeEvent) =>
        Form.handleChange(
          e,
          "model",
          setForm,
          form,
        ),
      label: "Modèle",
      type: "text",
      value: form.model,
      min: 0,
      max: 60,
      ariaDescribedby: "",
    },
    {
      icon: <IconBellConcierge />,
      id: "service",
      handleChange: (e: ChangeEvent) =>
        Form.handleChange(
          e,
          "service",
          setForm,
          form,
        ),
      label: "Prestation",
      type: "text",
      value: form.service,
      min: 0,
      max: 255,
      ariaDescribedby: "",
    },
  ];

  const handleSubmit = async (
    e: SyntheticEvent,
  ) => {
    e.preventDefault();

    // prevent spamming
    if (loading) return;

    setLoading(true);

    const errors =
      SupportValidator.inspectSupportData(form);

    if (errors.length) {
      for (const { key, message } of errors) {
        SupportValidator.errorStyle(key);
        toast.error(message);
      }

      setLoading(false);
      return;
    }

    try {
      await axios.post("/api/supports", form);

      toast.success(
        "Votre demande de prise en charge a été pris en compte",
      );

      // reset form
      setForm(defaultForm);

      setLoading(false);

      // scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      return;
    } catch (err: unknown) {
      toast.error("Une erreur est survenu");
      setLoading(false);
      return;
    }
  };

  return (
    <FormPage>
      <form onSubmit={handleSubmit}>
        {formInputs.map((props, index) => (
          <FormInput key={index} {...props} />
        ))}

        <FormTextarea
          id="breakdown"
          handleChange={(e: ChangeEvent) =>
            Form.handleChange(
              e,
              "breakdown",
              setForm,
              form,
            )
          }
          label="Description de la panne"
          value={form.breakdown}
          min={0}
          max={5_000}
          ariaDescribedby=""
          rows={4}
        />

        <FormCheckbox
          id="consent"
          handleChange={(e: ChangeEvent) =>
            Form.handleCheckboxChange(
              e,
              "consent",
              setForm,
              form,
            )
          }
          label="J'accepte que mes données soient traitées dans le cadre de ma demande"
          checked={form.consent}
          ariaDescribedby=""
        />

        <button className="form-support-btn">
          {!loading ? (
            "Envoyer ma demande"
          ) : (
            <IconLoader className="form-support-btn-icon-loader" />
          )}
        </button>
      </form>
    </FormPage>
  );
};

export default FormSupport;
