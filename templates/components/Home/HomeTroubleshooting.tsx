import React, { FC } from "react";
import Wrapper from "@/templates/layouts/Wrapper";
import IconCommentMedical from "@/public/icons/comment-medical.svg";
import IconPin from "@/public/icons/pin.svg";
import IconPiggyBank from "@/public/icons/piggy-bank.svg";
import IconThumbUp from "@/public/icons/thumb-up.svg";
import IconWifi from "@/public/icons/wifi.svg";

// types
import { THomeTroubleshootings } from "@/utils/types";

const HomeTroubleshooting: FC = () => {
  const troubleshootings: THomeTroubleshootings =
    [
      {
        id: 0,
        icon: <IconCommentMedical />,
        title: "Diagnostic offert",
        text: "Nous diagnostiquons votre problème et vous préconisons une solution en direct, sans engagement ni frais à engager.",
      },
      {
        id: 1,
        icon: <IconPin />,
        title: "Assistance à distance",
        text: "Nous diagnostiquons et résolvons votre problème informatique à distance : aucun déplacement n'est requis dans 90% des cas.",
      },
      {
        id: 2,
        icon: <IconPiggyBank />,
        title: "Tarifs forfaitaires",
        text: "Nos tarifs sont fixes et forfaitaires : il n'y a aucun dépassement de prix.",
      },
      {
        id: 3,
        icon: <IconThumbUp />,
        title: "Dépanné ou remboursé",
        text: 'Nos prestations unitaires sont garanties "Dépanné ou Remboursé" : vous ne payez que si votre problème est résolu !',
      },
    ];

  return (
    <Wrapper className="wrapper-padding-y home-troubleshooting">
      <>
        <IconWifi className="home-troubleshooting-wifi" />

        <div className="home-troubleshooting-main">
          <h2 className="title-secondary home-troubleshooting-title">
            Dépannage en ligne sécurisé
          </h2>

          <article className="home-troubleshooting-wrapper">
            {troubleshootings.map(
              ({ id, icon, title, text }) => (
                <div
                  key={id}
                  className="home-troubleshooting-item"
                >
                  <span className="home-troubleshooting-item-icon">
                    {icon}
                  </span>

                  <h3 className="home-troubleshooting-item-title">
                    {title}
                  </h3>

                  <p className="home-troubleshooting-item-text">
                    {text}
                  </p>
                </div>
              ),
            )}
          </article>
        </div>
      </>
    </Wrapper>
  );
};

export default HomeTroubleshooting;
