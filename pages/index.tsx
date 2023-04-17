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
import IconWeb from "@/public/icons/web.svg";
import IconKeyboard from "@/public/icons/keyboard.svg";

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
          imgSrc="services/computers/desktop-pc-open"
          imgAlt="Intérieur d'un ordinateur fixe propre"
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
          noMb
          noMt
        />
        <HomeTroubleshooting />
        <BlockCta
          imgSrc="services/consoles/nintendo-switch-red"
          imgAlt="Nintendo switch rouge"
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
          noMb
          noMt
        />
        <HomeReview />
        <BlockCta
          imgSrc="services/mobiles/iphone-break"
          imgAlt="Coque d'Iphone cassée"
          linkUrl="/mobiles"
          linkTitle="Découvrir"
          title={
            <h2>
              Nos prestations pour les{" "}
              <b>mobiles</b>
            </h2>
          }
          color="primary"
          icon={<IconMobile />}
          noMb
          noMt
        />
        <HomeSchedule />
        <BlockCta
          imgSrc="services/web/mac-charts-green"
          imgAlt="Mac avec un site web de statistique"
          linkUrl="/web"
          linkTitle="Découvrir"
          title={
            <h2>
              Nos prestations pour les{" "}
              <b>sites web</b>
            </h2>
          }
          reverse
          color="secondary"
          icon={<IconWeb />}
          noMb
          noMt
        />
        <HomeFaq />
        <BlockCta
          imgSrc="services/keyboards/keyboard-with-icons"
          imgAlt="Clavier personnalisé blanc et jaune avec des pictogrammes"
          linkUrl="/claviers"
          linkTitle="Découvrir"
          title={
            <h2>
              Nos prestations pour les{" "}
              <b>claviers</b>
            </h2>
          }
          color="primary"
          icon={<IconKeyboard />}
          noMb
          noMt
        />
      </>
    </Page>
  );
};

export default Index;
