import React, { FC } from "react";
import Page from "@/templates/layouts/Page";
import {
  GetStaticPaths,
  GetStaticPropsResult,
  GetStaticPropsContext,
} from "next";
import CardSectionService from "@/templates/components/Card/CardSectionService";
import { motion } from "framer-motion";

// services data
import computersData from "@/utils/data/services/computers";
import consolesData from "@/utils/data/services/consoles";
import mobilesData from "@/utils/data/services/mobiles";
import webData from "@/utils/data/services/web";
import keyboardsData from "@/utils/data/services/keyboards";

// interfaces
import { IServices } from "@/utils/interfaces";

// types
import { TGetStaticPathServices } from "@/utils/types";

// classes
import FramerMotion from "@/utils/FramerMotion";

const Services: FC<IServices> = ({
  defaultMeta,
  service,
  servicePath,
  data,
}) => {
  return (
    <Page
      title={service}
      description={defaultMeta}
      padding
    >
      <CardSectionService
        title={
          <motion.h2
            // motion
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            viewport={FramerMotion.viewportOne}
            transition={FramerMotion.transitionEaseInOut(
              1,
            )}
          >
            Prestations pour les <b>{service}</b>
          </motion.h2>
        }
        items={data}
        service={service}
        servicePath={servicePath}
      />
    </Page>
  );
};

export default Services;

export const getStaticPaths: GetStaticPaths<{
  service: string;
}> = async () => {
  // services paths
  const services: string[] = [
    computersData.service,
    consolesData.service,
    mobilesData.service,
    webData.service,
    keyboardsData.service,
  ];

  // create static paths
  const paths: TGetStaticPathServices =
    services.map((service) => ({
      params: {
        service,
      },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { service },
}: GetStaticPropsContext<any>): Promise<
  GetStaticPropsResult<IServices>
> => {
  // services paths data
  switch (service) {
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

    case keyboardsData.service:
      return {
        props: {
          ...keyboardsData,
        },
      };

    default:
      return {
        notFound: true,
      };
  }
};
