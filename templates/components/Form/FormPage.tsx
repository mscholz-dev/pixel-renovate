import React, { FC } from "react";
import Wrapper from "@/templates/layouts/Wrapper";

// interfaces
import { IFormPage } from "@/utils/interfaces";
import Image from "next/image";

const FormPage: FC<IFormPage> = ({
  children,
}) => {
  return (
    <Wrapper className="form-page">
      <>
        <article className="form-page-article">
          <div className="form-page-article-container">
            <h2 className="form-page-title">
              Demande de prise en charge
            </h2>

            <h3>
              Tous les champs sont obligatoires
            </h3>

            {children}
          </div>
        </article>

        <aside className="form-page-aside">
          <Image
            src="/img/keyboard.jpg"
            alt=""
            height={500}
            width={500}
            className="form-page-aside-img"
          />
        </aside>
      </>
    </Wrapper>
  );
};

export default FormPage;
