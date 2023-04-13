import React, {
  FC,
  useEffect,
  useRef,
} from "react";
import Page from "@/templates/layouts/Page";
import DataMeta from "@/utils/data/meta.json";
import ServicesApi from "../api/Services";
import SpecificService from "@/templates/components/SpecificService";

// interfaces
import {
  IServiceUrlPage,
  ISSRServiceUrlPage,
} from "@/utils/interfaces";

const OrdinateursUrl: FC<IServiceUrlPage> = ({
  imgSrc,
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

    sectionRef.current.style.minHeight = `calc(100vh - 96px - ${footer.offsetHeight}px)`;
  };

  useEffect(() => {
    handleFullHeight();
    window.addEventListener(
      "resize",
      handleFullHeight,
    );
  }, []);

  return (
    <Page
      title={title}
      description={DataMeta.description}
    >
      <section ref={sectionRef}>
        <SpecificService
          imgSrc={imgSrc}
          title={title}
          time={time}
          price={price}
          content={content}
          type="Ordinateur"
        />
      </section>
    </Page>
  );
};

export default OrdinateursUrl;

export const getServerSideProps = async (
  ctx: ISSRServiceUrlPage,
) => {
  const { data, err } =
    await ServicesApi.getSpecificService(
      ctx.params.url,
    );

  if (err)
    return {
      notFound: true,
    };

  return {
    props: {
      ...data,
    },
  };
};
