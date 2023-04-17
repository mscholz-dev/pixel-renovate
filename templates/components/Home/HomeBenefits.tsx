import React, { FC } from "react";
import IconKey from "@/public/icons/key.svg";
import { motion } from "framer-motion";

// data
import benefitsData from "@/utils/data/benefits";

// classes
import FramerMotion from "@/utils/FramerMotion";

const HomeBenefits: FC = () => {
  return (
    <section className="wrapper-padding-y home-benefits">
      <motion.span
        className="home-benefits-key"
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
        <IconKey />
      </motion.span>

      <motion.h2
        className="title-secondary home-benefits-title"
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
        Avantages clés
      </motion.h2>

      <article className="home-benefits-wrapper">
        {benefitsData.map(
          ({ id, icon, blob, title, text }) => (
            <motion.div
              key={id}
              className="home-benefits-item"
              // motion
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={FramerMotion.viewportOne}
              transition={FramerMotion.transitionEaseInOut(
                0.5,
              )}
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
            </motion.div>
          ),
        )}
      </article>
    </section>
  );
};

export default HomeBenefits;
