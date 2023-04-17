import React, { FC } from "react";
import Image from "next/image";

// interfaces
import { IFormPage } from "@/utils/interfaces";

const FormPage: FC<IFormPage> = ({
  imgSrc,
  imgAlt,
  children,
}) => {
  return (
    <section className="form-page">
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
          src={`/img/services/${imgSrc}.webp`}
          alt={imgAlt}
          height={500}
          width={500}
          className="form-page-aside-img"
        />
      </aside>
    </section>
  );
};

export default FormPage;
