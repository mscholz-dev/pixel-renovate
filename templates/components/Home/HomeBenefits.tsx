import React, { FC } from "react";
import Wrapper from "@/templates/layouts/Wrapper";
import IconBugSlash from "@/public/icons/bug-slash.svg";
import IconDisk from "@/public/icons/disk.svg";
import IconMedal from "@/public/icons/medal.svg";
import IconSpray from "@/public/icons/spray.svg";
import IconTools from "@/public/icons/tools.svg";
import IconComputerRepair from "@/public/icons/computer-repair.svg";
import BlobBenefitsOne from "@/public/blobs/benefits-one.svg";
import BlobBenefitsTwo from "@/public/blobs/benefits-two.svg";
import BlobBenefitsThree from "@/public/blobs/benefits-three.svg";
import BlobBenefitsFour from "@/public/blobs/benefits-four.svg";
import BlobBenefitsFive from "@/public/blobs/benefits-five.svg";
import BlobBenefitsSix from "@/public/blobs/benefits-six.svg";
import IconKey from "@/public/icons/key.svg";

// types
import { THomeBenefits } from "@/utils/types";

const HomeBenefits: FC = () => {
  const benefits: THomeBenefits = [
    {
      id: 0,
      icon: <IconTools />,
      blob: <BlobBenefitsOne />,
      title: "Réparation et dépannage",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod fringilla turpis tempor feugiat. Proin. ",
    },
    {
      id: 1,
      icon: <IconBugSlash />,
      blob: <BlobBenefitsTwo />,
      title: "Désinfection de virus",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod fringilla turpis tempor feugiat. Proin. ",
    },
    {
      id: 2,
      icon: <IconComputerRepair />,
      blob: <BlobBenefitsThree />,
      title: "Montage et installation",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod fringilla turpis tempor feugiat. Proin. ",
    },
    {
      id: 3,
      icon: <IconDisk />,
      blob: <BlobBenefitsFour />,
      title: "Récupération de données",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod fringilla turpis tempor feugiat. Proin. ",
    },
    {
      id: 4,
      icon: <IconSpray />,
      blob: <BlobBenefitsFive />,
      title: "Entretien et nettoyage",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod fringilla turpis tempor feugiat. Proin. ",
    },
    {
      id: 5,
      icon: <IconMedal />,
      blob: <BlobBenefitsSix />,
      title: "Service de qualité",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod fringilla turpis tempor feugiat. Proin. ",
    },
  ];

  return (
    <Wrapper className="wrapper-padding-y home-benefits">
      <>
        <IconKey className="home-benefits-key" />

        <h2 className="title-secondary home-benefits-title">
          Avantages clés
        </h2>

        <article className="home-benefits-wrapper">
          {benefits.map(
            ({ id, icon, blob, title, text }) => (
              <div
                key={id}
                className="home-benefits-item"
              >
                <div className="home-benefits-item-assets">
                  <span className="home-benefits-item-blob">
                    {blob}
                  </span>

                  <span className="home-benefits-item-icon">
                    {icon}
                  </span>
                </div>

                <h3 className="home-benefits-item-title">
                  {title}
                </h3>

                <p className="home-benefits-item-text">
                  {text}
                </p>
              </div>
            ),
          )}
        </article>
      </>
    </Wrapper>
  );
};

export default HomeBenefits;
