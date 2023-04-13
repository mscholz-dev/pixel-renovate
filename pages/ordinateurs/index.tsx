import React, { FC } from "react";
import Page from "@/templates/layouts/Page";
import DataMeta from "@/utils/data/meta.json";
import CardSectionService from "@/templates/components/Card/CardSectionService";
import ServicesApi from "../api/Services";

// interfaces
import { IGetServicesPage } from "../../utils/interfaces";

// types
import { TCardService } from "@/utils/types";

const Ordinateurs: FC<IGetServicesPage> = ({
  data,
}) => {
  return (
    <Page
      title="Ordinateurs"
      description={DataMeta.description}
      padding
    >
      <CardSectionService
        title={
          <h2>
            Prestations pour les{" "}
            <b>ordinateurs</b>
          </h2>
        }
        items={data as TCardService[]}
        category="ordinateurs"
        type="Ordinateur"
      />
    </Page>
  );
};

export default Ordinateurs;

export const getStaticProps = async () => {
  const { data, err } =
    await ServicesApi.getServices("Ordinateur");

  if (err) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
