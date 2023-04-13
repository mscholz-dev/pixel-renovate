import React, { FC } from "react";
import Image from "next/image";
import IconContact from "@/public/icons/contact.svg";
import Link from "next/link";

// interfaces
import { ISpecificService } from "@/utils/interfaces";

// types
import { TContentService } from "@/utils/types";

const SpecificService: FC<ISpecificService> = ({
  imgSrc,
  title,
  time,
  price,
  content,
  type,
}) => {
  const returnHTML = (
    { type, value }: TContentService[0],
    index: number,
  ) => {
    switch (type) {
      case "h3":
        return <h3 key={index}>{value}</h3>;

      case "p":
        return <p key={index}>{value}</p>;

      default:
        return;
    }
  };

  return (
    <article className="specific-service">
      <Image
        src={imgSrc}
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
          {content &&
            content.map(
              ({ type, value }, index) =>
                returnHTML(
                  { type, value },
                  index,
                ),
            )}
        </div>

        <Link
          href={{
            pathname:
              "/demande-de-prise-en-charge",
            query: { type: type, service: title },
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
