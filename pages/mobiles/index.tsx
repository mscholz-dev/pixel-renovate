import React, { FC } from "react";
import Page from "@/templates/layouts/Page";
import DataMeta from "@/utils/data/meta.json";
import CardSectionService from "@/templates/components/Card/CardSectionService";
import ServicesApi from "../api/Services";

// interfaces
import { IGetServicesPage } from "../../utils/interfaces";

// types
import { TCardService } from "@/utils/types";

const Mobiles: FC<IGetServicesPage> = ({
  data,
}) => {
  return (
    <Page
      title="Mobiles"
      description={DataMeta.description}
      padding
    >
      <CardSectionService
        title={
          <h2>
            Prestations pour les <b>mobiles</b>
          </h2>
        }
        items={data as TCardService[]}
        category="mobiles"
        type="Mobile"
      />
    </Page>
  );
};

export default Mobiles;

export const getStaticProps = async () => {
  const { data, err } =
    await ServicesApi.getServices("Mobile");

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
