import React, { FC } from "react";
import Page from "@/templates/layouts/Page";
import DataMeta from "@/utils/data/meta.json";
import {
  GetStaticPaths,
  GetStaticPropsResult,
  GetStaticPropsContext,
} from "next";
import CardSectionService from "@/templates/components/Card/CardSectionService";

// services data
import computersData from "@/utils/data/services/computers";
import consolesData from "@/utils/data/services/consoles";
import mobilesData from "@/utils/data/services/mobiles";
import webData from "@/utils/data/services/web";

// interfaces
import { IServices } from "@/utils/interfaces";

// types
import { TGetStaticPathServices } from "@/utils/types";

const Services: FC<IServices> = ({
  service,
  servicePath,
  serviceType,
  data,
}) => {
  return (
    <Page
      title={service}
      description={DataMeta.description}
      padding
    >
      <CardSectionService
        title={
          <h2>
            Prestations pour les <b>{service}</b>
          </h2>
        }
        items={data}
        category={service}
        servicePath={servicePath}
        serviceType={serviceType}
      />
    </Page>
  );
};

export default Services;

export const getStaticPaths: GetStaticPaths<{
  services: string;
}> = async () => {
  // services paths
  const services: string[] = [
    computersData.service,
    consolesData.service,
    mobilesData.service,
    webData.service,
  ];

  // create static paths
  const paths: TGetStaticPathServices =
    services.map((service) => ({
      params: {
        services: service,
      },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { services },
}: GetStaticPropsContext<any>): Promise<
  GetStaticPropsResult<IServices>
> => {
  // services paths data
  switch (services) {
    case computersData.service:
      return {
        props: {
          ...computersData,
        },
      };

    case consolesData.service:
      return {
        props: {
          ...consolesData,
        },
      };

    case mobilesData.service:
      return {
        props: {
          ...mobilesData,
        },
      };

    case webData.service:
      return {
        props: {
          ...webData,
        },
      };

    default:
      return {
        notFound: true,
      };
  }
};
