import React, { FC } from "react";
import { motion } from "framer-motion";

// interfaces
import { IFormPage } from "@/utils/interfaces";

// classes
import FramerMotion from "@/utils/FramerMotion";

const FormPage: FC<IFormPage> = ({
  imgSrc,
  imgAlt,
  children,
}) => {
  return (
    <section className="form-page">
      <article className="form-page-article">
        <div className="form-page-article-container">
          <motion.h2
            className="form-page-title"
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
            Demande de prise en charge
          </motion.h2>

          <motion.h3
            // motion
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={FramerMotion.viewportOne}
            transition={{
              ...FramerMotion.transitionEaseInOut(
                1,
              ),
              delay: 0.5,
            }}
          >
            Tous les champs sont obligatoires
          </motion.h3>

          {children}
        </div>
      </article>

      <aside className="form-page-aside">
        <motion.img
          src={`/img/services/${imgSrc}.webp`}
          alt={imgAlt}
          height={500}
          width={500}
          className="form-page-aside-img"
          // motion
          initial={{
            clipPath:
              FramerMotion.clipPathPolygonRightClose,
          }}
          whileInView={{
            clipPath:
              FramerMotion.clipPathPolygonOpen,
          }}
          viewport={FramerMotion.viewportOne}
          transition={FramerMotion.transitionEaseInOut(
            1,
          )}
        />
      </aside>
    </section>
  );
};

export default FormPage;
