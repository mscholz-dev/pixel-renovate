import React, { FC } from "react";
import Page from "@/templates/layouts/Page";

const MentionsLegales: FC = () => {
  const companyData = [
    {
      id: 0,
      title: "Responsable de publication",
      text: "",
    },
    {
      id: 1,
      title: "Adresse email",
      text: "pixelrenovate@gmail.com",
    },
    {
      id: 2,
      title: "Téléphone",
      text: "À renseigner",
    },
    {
      id: 3,
      title: "SIRET",
      text: "À renseigner",
    },
    {
      id: 4,
      title: "Adresse",
      text: "À renseigner",
    },
  ];

  const hostData = [
    {
      id: 0,
      title: "SIRET",
      text: "",
    },
    {
      id: 1,
    },
  ];

  return (
    <Page title="Mentions légales" description="">
      <>
        <h1>Mentions légales</h1>

        <div>
          <h2>Pixel Renovate</h2>
        </div>

        <p>
          HEROKU ADRESSE: Heroku - The Landmark at
          One Market, Suite 300, San Francisco, CA
          94105, United States.
        </p>

        <h2>Données personnelles et Cookies</h2>
        <p>
          Le site www.smooth-code.com ne fait
          l’objet d’aucune déclaration à la CNIL
          car aucune information personnelle n’est
          collectée. Aucun cookie n’est généré en
          plus de ceux utilisés par Google
          Analytics à des fins d’analyse du
          trafic.
        </p>
      </>
    </Page>
  );
};

export default MentionsLegales;
