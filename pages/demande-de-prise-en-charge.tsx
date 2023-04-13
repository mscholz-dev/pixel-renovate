import React, { FC } from "react";
import Page from "@/templates/layouts/Page";
import DataMeta from "@/utils/data/meta.json";
import FormSupport from "@/templates/components/Form/FormSupport";

// types
import { TTypeServiceProps } from "@/utils/types";

const DemandeDePriseEnCharge: FC<
  TTypeServiceProps
> = ({ type, service }) => {
  return (
    <Page
      title="Demande de prise en charge"
      description={DataMeta.description}
    >
      <>
        <FormSupport
          type={type}
          service={service}
        />
      </>
    </Page>
  );
};

export default DemandeDePriseEnCharge;

export const getServerSideProps = ({
  query,
}: {
  query: TTypeServiceProps;
}) => {
  return {
    props: {
      type: query.type || "",
      service: query.service || "",
    },
  };
};
