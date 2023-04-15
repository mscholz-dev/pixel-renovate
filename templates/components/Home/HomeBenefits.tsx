import React, { FC } from "react";
import Wrapper from "@/templates/layouts/Wrapper";
import IconKey from "@/public/icons/key.svg";

// data
import benefitsData from "@/utils/data/benefits";

const HomeBenefits: FC = () => {
  return (
    <Wrapper className="wrapper-padding-y home-benefits">
      <>
        <IconKey className="home-benefits-key" />

        <h2 className="title-secondary home-benefits-title">
          Avantages clés
        </h2>

        <article className="home-benefits-wrapper">
          {benefitsData.map(
            ({ id, icon, blob, title, text }) => (
              <div
                key={id}
                className="home-benefits-item"
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
              </div>
            ),
          )}
        </article>
      </>
    </Wrapper>
  );
};

export default HomeBenefits;
