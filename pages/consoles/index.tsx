import React, { FC } from "react";
import Page from "@/templates/layouts/Page";
import DataMeta from "@/utils/data/meta.json";
import CardSectionService from "@/templates/components/Card/CardSectionService";
import ServicesApi from "../api/Services";

// interfaces
import { IGetServicesPage } from "../../utils/interfaces";

// types
import { TCardService } from "@/utils/types";

const Consoles: FC<IGetServicesPage> = ({
  data,
}) => {
  return (
    <Page
      title="Consoles"
      description={DataMeta.description}
      padding
    >
      <CardSectionService
        title={
          <h2>
            Prestations pour les <b>consoles</b>
          </h2>
        }
        items={data as TCardService[]}
        category="consoles"
        type="Console"
      />
    </Page>
  );
};

export default Consoles;

export const getStaticProps = async () => {
  const { data, err } =
    await ServicesApi.getServices("Console");

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
