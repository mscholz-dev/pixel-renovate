import React, {
  FC,
  useState,
  SyntheticEvent,
} from "react";
import Page from "@/templates/layouts/Page";
import FormSupport from "@/templates/components/Form/FormSupport";
import { toast } from "react-toastify";
import axios from "axios";
import SupportValidatorClass from "@/utils/validators/SupportValidator";
import { GetServerSidePropsContext } from "next";

// services data
import computersData from "@/utils/data/services/computers";
import consolesData from "@/utils/data/services/consoles";
import mobilesData from "@/utils/data/services/mobiles";
import webData from "@/utils/data/services/web";
import keyboardsData from "@/utils/data/services/keyboards";

// classes
const SupportValidator =
  new SupportValidatorClass();

// interfaces
import { IDemandeDePriseEnCharge } from "@/utils/interfaces";

// types
import {
  TServiceData,
  TSupportForm,
} from "@/utils/types";

const DemandeDePriseEnCharge: FC<
  IDemandeDePriseEnCharge
> = ({ service, title, meta }) => {
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
    title,
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
        service,
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
        `/api/supports/${service}`,
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
      description={meta}
    >
      <FormSupport
        loading={loading}
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        service={service}
      />
    </Page>
  );
};

export default DemandeDePriseEnCharge;

export const getServerSideProps = (
  ctx: GetServerSidePropsContext,
) => {
  const service = ctx.params?.service || null;
  const title = ctx.query.prestation;

  let newService = "";
  let newTitle = "";
  let newMeta = "";
  let finding: TServiceData | undefined =
    undefined;

  // validate service name
  switch (service) {
    case computersData.service:
      newService = computersData.service;

      // find specific service data
      finding = computersData.data.find(
        (item) => item.title === title,
      );
      newTitle = finding?.title || "";
      newMeta =
        finding?.meta ||
        computersData.defaultMeta;
      break;

    case consolesData.service:
      newService = consolesData.service;

      // find specific service data
      finding = consolesData.data.find(
        (item) => item.title === title,
      );
      newTitle = finding?.title || "";
      newMeta =
        finding?.meta || consolesData.defaultMeta;
      break;

    case mobilesData.service:
      newService = mobilesData.service;

      // find specific service data
      finding = mobilesData.data.find(
        (item) => item.title === title,
      );
      newTitle = finding?.title || "";
      newMeta =
        finding?.meta || mobilesData.defaultMeta;
      break;

    case webData.service:
      newService = webData.service;

      // find specific service data
      finding = webData.data.find(
        (item) => item.title === title,
      );
      newTitle = finding?.title || "";
      newMeta =
        finding?.meta || webData.defaultMeta;
      break;

    case keyboardsData.service:
      newService = keyboardsData.service;

      // find specific service data
      finding = keyboardsData.data.find(
        (item) => item.title === title,
      );
      newTitle = finding?.title || "";
      newMeta =
        finding?.meta ||
        keyboardsData.defaultMeta;
      break;

    default:
      return {
        notFound: true,
      };
  }

  return {
    props: {
      service: newService,
      title: newTitle,
      meta: newMeta,
    },
  };
};
