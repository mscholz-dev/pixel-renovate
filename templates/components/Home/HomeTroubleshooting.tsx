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
        <motion.h2
          className="title-secondary home-troubleshooting-title"
          // motion
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={FramerMotion.viewportOne}
          transition={FramerMotion.transitionEaseInOut(
            1,
          )}
        >
          Dépannage en ligne sécurisé
        </motion.h2>

        <article className="home-troubleshooting-wrapper">
          {troubleshootingsData.map(
            ({ id, icon, title, text }) => (
              <motion.div
                key={id}
                className="home-troubleshooting-item"
                // motion
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={
                  FramerMotion.viewportOne
                }
                transition={FramerMotion.transitionEaseInOut(
                  1,
                )}
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
              </motion.div>
            ),
          )}
        </article>
      </div>
    </section>
  );
};

export default HomeTroubleshooting;
