import React, { FC } from "react";
import Page from "@/templates/layouts/Page";
import DataMeta from "@/utils/data/meta.json";
import Home from "@/templates/components/Home/Home";
import HomeBenefits from "@/templates/components/Home/HomeBenefits";
import HomeTroubleshooting from "@/templates/components/Home/HomeTroubleshooting";
import HomeReview from "@/templates/components/Home/HomeReview";
import HomeSchedule from "@/templates/components/Home/HomeSchedule";
import HomeFaq from "@/templates/components/Home/HomeFaq";
import BlockCta from "@/templates/components/BlockCta";
import IconComputer from "@/public/icons/computer.svg";
import IconConsole from "@/public/icons/console.svg";
import IconMobile from "@/public/icons/mobile.svg";

const Index: FC = () => {
  return (
    <Page
      title="Page d'accueil"
      description={DataMeta.description}
    >
      <>
        <Home />
        <HomeBenefits />
        <BlockCta
          imgSrc="mac-open.webp"
          imgAlt="Image d'un ordinateur Mac ouvert à l'envers"
          linkUrl="/ordinateurs"
          linkTitle="Découvrir"
          title={
            <h2>
              Nos prestations pour les{" "}
              <b>ordinateurs</b>
            </h2>
          }
          color="primary"
          icon={<IconComputer />}
        />
        <HomeTroubleshooting />
        <BlockCta
          imgSrc="nintendo-switch-red.webp"
          imgAlt="Image d'une nintendo switch rouge"
          linkUrl="/consoles"
          linkTitle="Découvrir"
          title={
            <h2>
              Nos prestations pour les{" "}
              <b>consoles</b>
            </h2>
          }
          reverse
          color="secondary"
          icon={<IconConsole />}
        />
        <HomeReview />
        <BlockCta
          imgSrc="phone-break.jpg"
          imgAlt="Image d'un téléphone cassé"
          linkUrl="/telephones"
          linkTitle="Découvrir"
          title={
            <h2>
              Nos prestations pour les{" "}
              <b>téléphones</b>
            </h2>
          }
          color="primary"
          icon={<IconMobile />}
        />
        <HomeSchedule />
        <HomeFaq />
      </>
    </Page>
  );
};

export default Index;
