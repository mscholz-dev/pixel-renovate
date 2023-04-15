import React, { FC } from "react";
import Wrapper from "@/templates/layouts/Wrapper";
import IconWifi from "@/public/icons/wifi.svg";

// data
import troubleshootingsData from "@/utils/data/troubleshootings";

const HomeTroubleshooting: FC = () => {
  return (
    <Wrapper className="wrapper-padding-y home-troubleshooting">
      <>
        <IconWifi className="home-troubleshooting-wifi" />

        <div className="home-troubleshooting-main">
          <h2 className="title-secondary home-troubleshooting-title">
            Dépannage en ligne sécurisé
          </h2>

          <article className="home-troubleshooting-wrapper">
            {troubleshootingsData.map(
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
