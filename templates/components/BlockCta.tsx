import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// interfaces
import { IBlockCta } from "@/utils/interfaces";

// classes
import FramerMotion from "@/utils/FramerMotion";

const BlockCta: FC<IBlockCta> = ({
  imgSrc,
  imgAlt,
  linkUrl,
  linkTitle,
  title,
  reverse,
  color,
  icon,
  noMb,
  noMt,
}) => {
  return (
    <section
      className={`block-cta${
        reverse ? " block-cta-reverse" : ""
      }${
        color === "primary"
          ? " block-cta-color-primary"
          : " block-cta-color-secondary"
      }${noMb ? " block-cta-no-mb" : ""}${
        noMt ? " block-cta-no-mt" : ""
      }`}
    >
      <>
        <motion.img
          src={`/img/${imgSrc}.webp`}
          alt={imgAlt}
          className="block-cta-img"
          height={500}
          width={500}
          // motion
          initial={{
            clipPath: !reverse
              ? FramerMotion.clipPathPolygonLeftClose
              : FramerMotion.clipPathPolygonRightClose,
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

        <motion.span
          className="block-cta-icon"
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
          {icon}
        </motion.span>

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
    </section>
  );
};

export default BlockCta;
