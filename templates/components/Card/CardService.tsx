import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import IconLoader from "@/public/icons/loader.svg";
import IconInfo from "@/public/icons/info.svg";
import IconContact from "@/public/icons/contact.svg";
import { motion } from "framer-motion";

// interfaces
import { ICardService } from "@/utils/interfaces";

// classes
import FramerMotion from "@/utils/FramerMotion";

const CardService: FC<ICardService> = ({
  img,
  title,
  time,
  price,
  url,
  service,
  servicePath,
}) => {
  return (
    <motion.div
      className="card-service"
      // motion
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={FramerMotion.viewportOne}
      transition={FramerMotion.transitionEaseInOut(
        1,
      )}
    >
      <div className="card-service-img-container">
        <Image
          src={`/img/services/${servicePath}/${img}.webp`}
          alt={title}
          className="card-service-img"
          height={300}
          width={300}
        />
        <IconLoader className="card-service-img-loader" />
      </div>

      <div className="card-service-wrapper">
        <h3 className="card-service-title">
          {title}
        </h3>

        <div className="card-service-details">
          <p className="card-service-details-item">
            <span>À partir de :</span>
            <span>{price}</span>
          </p>
          <p className="card-service-details-item">
            <span>Temps estimé :</span>
            <span>{time}</span>
          </p>
        </div>

        <div className="card-service-btn">
          <Link
            href={{
              pathname:
                "/demande-de-prise-en-charge/[service]",
              query: {
                service,
                prestation: title,
              },
            }}
            className="card-service-btn-primary"
          >
            <IconContact className="card-service-btn-icon" />
            Prendre rendez-vous
          </Link>

          <Link
            href={`/${service}/${url}`}
            className="card-service-btn-secondary"
          >
            <IconInfo className="card-service-btn-icon" />
            En savoir plus
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CardService;
