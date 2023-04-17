import React, { FC } from "react";
import IconContact from "@/public/icons/contact.svg";
import Link from "next/link";
import HTMLReactParser from "html-react-parser";
import { motion } from "framer-motion";

// interfaces
import { ISpecificService } from "@/utils/interfaces";

// classes
import FramerMotion from "@/utils/FramerMotion";

const SpecificService: FC<ISpecificService> = ({
  servicePath,
  service,
  img,
  title,
  time,
  price,
  content,
}) => {
  return (
    <article className="specific-service">
      <motion.img
        src={`/img/services/${servicePath}/${img}.webp`}
        alt={title}
        className="specific-service-img"
        height={200}
        width={1000}
        // motion
        initial={{
          clipPath:
            FramerMotion.clipPathPolygonLeftClose,
        }}
        animate={{
          clipPath:
            FramerMotion.clipPathPolygonOpen,
        }}
        viewport={FramerMotion.viewportOne}
        transition={FramerMotion.transitionEaseInOut(
          1,
        )}
      />

      <motion.div
        className="wrapper-padding-y specific-service-wrapper"
        // motion
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        viewport={FramerMotion.viewportOne}
        transition={FramerMotion.transitionEaseInOut(
          1,
        )}
      >
        <h2 className="specific-service-title">
          {title}
        </h2>

        <div className="specific-service-details">
          <p className="specific-service-details-item">
            <span>À partir de :</span>
            <span>{price}</span>
          </p>
          <p className="specific-service-details-item">
            <span>Temps estimé :</span>
            <span>{time}</span>
          </p>
        </div>

        <div className="specific-service-content">
          {HTMLReactParser(content)}
        </div>

        <motion.div
          // motion
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={FramerMotion.viewportOne}
          transition={FramerMotion.transitionEaseInOut(
            1,
          )}
        >
          <Link
            href={{
              pathname:
                "/demande-de-prise-en-charge/[service]",
              query: {
                service,
                prestation: title,
              },
            }}
            className="specific-service-btn"
          >
            <IconContact className="specific-service-btn-icon" />
            Prendre rendez-vous
          </Link>
        </motion.div>
      </motion.div>
    </article>
  );
};

export default SpecificService;
