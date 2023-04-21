import React, {
  FC,
  useRef,
  useEffect,
} from "react";
import Page from "@/templates/layouts/Page";
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
import keyboardsData from "@/utils/data/services/keyboards";

// interfaces
import { IServicesUrl } from "@/utils/interfaces";

// types
import {
  TGetStaticPathSpecificService,
  TServiceData,
} from "@/utils/types";

const ServicesUrl: FC<IServicesUrl> = ({
  servicePath,
  service,
  meta,
  img,
  title,
  time,
  price,
  content,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleFullHeight = () => {
    if (!sectionRef.current) return;

    const footer =
      document.getElementById("footer");

    if (!footer) return;

    sectionRef.current.style.minHeight = `calc(100vh - ${footer.offsetHeight}px - 56px)`;
  };

  useEffect(() => {
    handleFullHeight();
    window.addEventListener(
      "resize",
      handleFullHeight,
    );
  }, []);

  return (
    <Page title={title} description={meta}>
      <section ref={sectionRef}>
        <SpecificService
          servicePath={servicePath}
          service={service}
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
      service: computersData.service,
      url,
    }),
  );

  // consoles urls
  const consolesUrls = consolesData.data.map(
    ({ url }) => ({
      service: consolesData.service,
      url,
    }),
  );

  // mobiles urls
  const mobilesUrls = mobilesData.data.map(
    ({ url }) => ({
      service: mobilesData.service,
      url,
    }),
  );

  // web urls
  const webUrls = webData.data.map(({ url }) => ({
    service: webData.service,
    url,
  }));

  // keyboards urls
  const keyboardsUrls = keyboardsData.data.map(
    ({ url }) => ({
      service: keyboardsData.service,
      url,
    }),
  );

  // services urls
  const servicesUrls = [
    ...computersUrls,
    ...consolesUrls,
    ...mobilesUrls,
    ...webUrls,
    ...keyboardsUrls,
  ];

  // create static specific paths
  const paths: TGetStaticPathSpecificService =
    servicesUrls.map(({ service, url }) => ({
      params: {
        service,
        url,
      },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { service, url },
}: GetStaticPropsContext<any>): Promise<
  GetStaticPropsResult<any>
> => {
  let data: null | TServiceData = null;

  switch (service) {
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
          service: computersData.service,
          meta: data.meta,
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
          servicePath: consolesData.servicePath,
          service: consolesData.service,
          meta: data.meta,
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
          servicePath: mobilesData.servicePath,
          service: mobilesData.service,
          meta: data.meta,
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
          servicePath: webData.servicePath,
          service: webData.service,
          meta: data.meta,
          img: data.img,
          title: data.title,
          time: data.time,
          price: data.price,
          content: data.content,
        },
      };

    case keyboardsData.service:
      // get data
      data =
        keyboardsData.data.find(
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
          servicePath: keyboardsData.servicePath,
          service: keyboardsData.service,
          meta: data.meta,
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
