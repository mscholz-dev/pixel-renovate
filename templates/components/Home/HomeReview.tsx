import Wrapper from "@/templates/layouts/Wrapper";
import React, { FC } from "react";
import IconQuote from "@/public/icons/quote.svg";
import Image from "next/image";
import IconStar from "@/public/icons/star.svg";

// types
import { THomeReviews } from "@/utils/types";

const HomeReview: FC = () => {
  const reviews: THomeReviews = [
    {
      id: 0,
      imgSrc: "arthur-dupuy.png",
      imgAlt: "Photo de profil de Arthur Dupuy",
      name: "Arthur Dupuy",
      subject: "Incroyable!",
      text: "Rien à dire, qualité parfaite et professionnalisme irréprochable. Je ne peux que vous souhaiter de passer par eux pour tout type de réparation.",
    },
    {
      id: 1,
      imgSrc: "camille-fleury.png",
      imgAlt: "Photo de profil de Camille Fleury",
      name: "Camille Fleury",
      subject: "Rapide et efficace",
      text: "Mon téléphone avait des difficultés à charger, le problème a été résolu en même pas 30 secondes, personnel très agréable. Je conseille fortement.",
    },
    {
      id: 2,
      imgSrc: "hugo-mercier.png",
      imgAlt: "Photo de profil de Hugo Mercier",
      name: "Hugo Mercier",
      subject: "Prix attractif",
      text: "Je suis venu faire réparer un écran, je pensais en avoir pour un bras et finalement j'ai été agréablement surpris du prix. De plus le travail effectué est top, je recommande fortement.",
    },
  ];

  return (
    <Wrapper className="home-review">
      <>
        <IconStar className="home-review-star" />

        <div className="home-review-main">
          <article>
            <h2 className="title-secondary home-review-title">
              Que disent nos client sur nous
            </h2>

            <p className="home-review-text">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Morbi
              in ultrices turpis, vitae
              ullamcorper odio. Vestibulum eget
              faucibus dui, non imperdiet libero.
              Integer gravida lacus nec ipsum
              fermentum, quis tristique sapien
              pretium. Quisque venenatis leo quis
              efficitur sagittis. Integer rutrum.
            </p>
          </article>

          <div>
            {reviews.map(
              ({
                id,
                imgSrc,
                imgAlt,
                name,
                subject,
                text,
              }) => (
                <article
                  key={id}
                  className="home-review-item"
                >
                  <IconQuote className="home-review-item-quote" />

                  <p className="home-review-item-text">
                    &quot;{text}&quot;
                  </p>

                  <div className="home-review-item-details">
                    <Image
                      src={`/img/profile/${imgSrc}`}
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
                </article>
              ),
            )}
          </div>
        </div>
      </>
    </Wrapper>
  );
};

export default HomeReview;
