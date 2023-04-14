import React, { FC } from "react";
import Image from "next/image";
import IconContact from "@/public/icons/contact.svg";
import Link from "next/link";

// interfaces
import { ISpecificService } from "@/utils/interfaces";
import HTMLReactParser from "html-react-parser";

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
      <Image
        src={`/img/services/${servicePath}/${img}.webp`}
        alt={title}
        className="specific-service-img"
        height={200}
        width={1000}
      />

      <div className="wrapper-padding-y specific-service-wrapper">
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

        <Link
          href={{
            pathname:
              "/demande-de-prise-en-charge",
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
      </div>
    </article>
  );
};

export default SpecificService;
