import React, { FC } from "react";
import Page from "@/templates/layouts/Page";
import DataMeta from "@/utils/data/meta.json";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import SpecificService from "@/templates/components/SpecificService";

// services data
import computersData from "@/utils/data/services/computers";
import consolesData from "@/utils/data/services/consoles";
import mobilesData from "@/utils/data/services/mobiles";
import webData from "@/utils/data/services/web";

// interfaces
import { IServicesUrl } from "@/utils/interfaces";

// types
import {
  TGetStaticPathSpecificService,
  TServiceData,
} from "@/utils/types";

const ServicesUrl: FC<IServicesUrl> = ({
  servicePath,
  serviceType,
  img,
  title,
  time,
  price,
  content,
}) => {
  return (
    <Page
      title={title}
      description={DataMeta.description}
      padding
    >
      <section>
        <SpecificService
          servicePath={servicePath}
          serviceType={serviceType}
          img={img}
          title={title}
          time={time}
          price={price}
          content={content}
        />
      </section>
    </Page>
  );
};

export default ServicesUrl;

export const getStaticPaths: GetStaticPaths<{
  url: string;
}> = async () => {
  // computers urls
  const computersUrls = computersData.data.map(
    ({ url }) => ({
      services: computersData.service,
      url,
    }),
  );

  // consoles urls
  const consolesUrls = consolesData.data.map(
    ({ url }) => ({
      services: consolesData.service,
      url,
    }),
  );

  // mobiles urls
  const mobilesUrls = mobilesData.data.map(
    ({ url }) => ({
      services: mobilesData.service,
      url,
    }),
  );

  // web urls
  const webUrls = webData.data.map(({ url }) => ({
    services: webData.service,
    url,
  }));

  // services urls
  const servicesUrls = [
    ...computersUrls,
    ...consolesUrls,
    ...mobilesUrls,
    ...webUrls,
  ];

  // create static specific paths
  const paths: TGetStaticPathSpecificService =
    servicesUrls.map(({ services, url }) => ({
      params: {
        services,
        url,
      },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { services, url },
}: GetStaticPropsContext<any>): Promise<
  GetStaticPropsResult<any>
> => {
  let data: null | TServiceData = null;

  switch (services) {
    case computersData.service:
      // get data
      data =
        computersData.data.find(
          (item) => item.url === url,
        ) || null;

      // not found
      if (data === null)
        return {
          notFound: true,
        };

      // return data
      return {
        props: {
          servicePath: computersData.servicePath,
          serviceType: computersData.serviceType,
          img: data.img,
          title: data.title,
          time: data.time,
          price: data.price,
          content: data.content,
        },
      };

    case consolesData.service:
      // get data
      data =
        consolesData.data.find(
          ({ url }) => url === url,
        ) || null;

      // not found
      if (data === null)
        return {
          notFound: true,
        };

      // return data
      return {
        props: {
          servicePath: consolesData.servicePath,
          serviceType: consolesData.serviceType,
          img: data.img,
          title: data.title,
          time: data.time,
          price: data.price,
          content: data.content,
        },
      };

    case mobilesData.service:
      // get data
      data =
        mobilesData.data.find(
          ({ url }) => url === url,
        ) || null;

      // not found
      if (data === null)
        return {
          notFound: true,
        };

      // return data
      return {
        props: {
          servicePath: mobilesData.servicePath,
          serviceType: mobilesData.serviceType,
          img: data.img,
          title: data.title,
          time: data.time,
          price: data.price,
          content: data.content,
        },
      };

    case webData.service:
      // get data
      data =
        webData.data.find(
          ({ url }) => url === url,
        ) || null;

      // not found
      if (data === null)
        return {
          notFound: true,
        };

      // return data
      return {
        props: {
          servicePath: webData.servicePath,
          serviceType: webData.serviceType,
          img: data.img,
          title: data.title,
          time: data.time,
          price: data.price,
          content: data.content,
        },
      };

    default:
      return {
        notFound: true,
      };
  }
};
