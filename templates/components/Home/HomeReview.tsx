import React, { FC } from "react";
import IconQuote from "@/public/icons/quote.svg";
import Image from "next/image";
import IconStar from "@/public/icons/star.svg";
import { motion } from "framer-motion";

// data
import reviewsData from "@/utils/data/reviews";

// classes
import FramerMotion from "@/utils/FramerMotion";

const HomeReview: FC = () => {
  return (
    <section className="home-review">
      <motion.span
        className="home-review-star"
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
        <IconStar />
      </motion.span>

      <div className="home-review-main">
        <article>
          <motion.h2
            className="title-secondary home-review-title"
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
            Que disent nos client sur nous
          </motion.h2>

          <motion.p
            className="home-review-text"
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
            Chez Pixel Renovate, nous sommes fiers
            de fournir des services de réparation
            de matériel informatique de haute
            qualité à nos clients. Nous
            travaillons dur pour répondre à leurs
            besoins et pour les satisfaire à
            chaque fois qu&apos;ils font appel à
            nous. Nous sommes heureux de partager
            quelques témoignages de nos clients
            satisfaits.
          </motion.p>
          <motion.p
            className="home-review-text"
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
            Ces témoignages montrent que nous
            sommes déterminés à fournir des
            services de réparation de matériel
            informatique de qualité à tous nos
            clients. Nous sommes reconnaissants
            pour leur confiance et nous
            continuerons à travailler dur pour
            répondre à leurs besoins et à leurs
            attentes. Si vous avez besoin de
            réparer votre matériel informatique,
            n&apos;hésitez pas à nous contacter et
            à faire partie de notre communauté de
            clients satisfaits.
          </motion.p>
        </article>

        <div>
          {reviewsData.map(
            ({
              id,
              imgSrc,
              imgAlt,
              name,
              subject,
              text,
            }) => (
              <motion.article
                key={id}
                className="home-review-item"
                // motion
                initial={{
                  x: 100,
                  y: 200,
                  rotate: 0,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  y: 0,
                  rotate: -10,
                  opacity: 1,
                }}
                viewport={
                  FramerMotion.viewportOne
                }
                transition={{
                  ...FramerMotion.transitionEaseInOut(
                    0.5,
                  ),
                  delay: id / 6,
                }}
              >
                <IconQuote className="home-review-item-quote" />

                <p className="home-review-item-text">
                  &quot;{text}&quot;
                </p>

                <div className="home-review-item-details">
                  <Image
                    src={`/img/profile/${imgSrc}.webp`}
                    alt={imgAlt}
                    className="home-review-item-img"
                    height={56}
                    width={56}
                  />

                  <div>
                    <h3 className="home-review-item-name">
                      {name}
                    </h3>

                    <p className="home-review-item-subject">
                      {subject}
                    </p>
                  </div>
                </div>
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeReview;
