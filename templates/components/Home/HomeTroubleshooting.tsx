import React, { FC } from "react";
import IconWifi from "@/public/icons/wifi.svg";
import { motion } from "framer-motion";

// data
import troubleshootingsData from "@/utils/data/troubleshootings";

// classes
import FramerMotion from "@/utils/FramerMotion";

const HomeTroubleshooting: FC = () => {
  return (
    <section className="wrapper-padding-y home-troubleshooting">
      <motion.span
        className="home-troubleshooting-wifi"
        // motion
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={FramerMotion.transitionEaseInOut(
          0.5,
        )}
      >
        <IconWifi />
      </motion.span>

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
    </section>
  );
};

export default HomeTroubleshooting;
