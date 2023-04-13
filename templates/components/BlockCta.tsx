import React, { FC } from "react";
import Wrapper from "../layouts/Wrapper";
import Image from "next/image";
import Link from "next/link";

// interfaces
import { IBlockCta } from "@/utils/interfaces";

const BlockCta: FC<IBlockCta> = ({
  imgSrc,
  imgAlt,
  linkUrl,
  linkTitle,
  title,
  reverse,
  color,
  icon,
}) => {
  return (
    <Wrapper
      className={`block-cta${
        reverse ? " block-cta-reverse" : ""
      }${
        color === "primary"
          ? " block-cta-color-primary"
          : " block-cta-color-secondary"
      }`}
    >
      <>
        <Image
          src={`/img/${imgSrc}`}
          alt={imgAlt}
          className="block-cta-img"
          height={500}
          width={500}
        />

        <span className="block-cta-icon">
          {icon}
        </span>

        <article className="block-cta-wrapper">
          {title}

          <Link
            href={linkUrl}
            className="block-cta-link"
          >
            {linkTitle}
          </Link>
        </article>
      </>
    </Wrapper>
  );
};

export default BlockCta;
