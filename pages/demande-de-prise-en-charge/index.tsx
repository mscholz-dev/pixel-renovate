import React, {
  FC,
  useState,
  SyntheticEvent,
} from "react";
import Page from "@/templates/layouts/Page";
import DataMeta from "@/utils/data/meta.json";
import FormSupport from "@/templates/components/Form/FormSupport";
import { toast } from "react-toastify";
import axios from "axios";
import SupportValidatorClass from "@/utils/validators/SupportValidator";

// classes
const SupportValidator =
  new SupportValidatorClass();

// interfaces
import { IDemandeDePriseEnCharge } from "@/utils/interfaces";

// types
import { TSupportForm } from "@/utils/types";

const DemandeDePriseEnCharge: FC = () => {
  const [loading, setLoading] =
    useState<boolean>(false);

  const [defaultForm, setDefaultForm] =
    useState<TSupportForm>({
      fullName: "",
      email: "",
      phone: "",
      postalCode: "",
      city: "",
      brand: "",
      model: "",
      title: "",
      description: "",
      consent: false,
    });

  const [form, setForm] = useState<TSupportForm>({
    ...defaultForm,
  });

  const handleSubmit = async (
    e: SyntheticEvent,
  ): Promise<void> => {
    e.preventDefault();

    // prevent spamming
    if (loading) return;

    setLoading(true);

    const errors =
      SupportValidator.inspectSupportData(
        form,
        "",
      );

    if (errors.length) {
      for (const { key, message } of errors) {
        SupportValidator.errorStyle(key);
        toast.error(message);
      }

      setLoading(false);
      return;
    }

    try {
      await axios.post(
        `/api/supports/general`,
        form,
      );

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
      console.error(err);
      toast.error("Une erreur est survenu");
      setLoading(false);
      return;
    }
  };

  return (
    <Page
      title="Demande de prise en charge"
      description={DataMeta.description}
    >
      <FormSupport
        loading={loading}
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        service={""}
      />
    </Page>
  );
};

export default DemandeDePriseEnCharge;
