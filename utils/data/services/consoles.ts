// types
import { TServiceObject } from "../../types";

const consolesData: TServiceObject = {
  service: "consoles",
  servicePath: "consoles",
  data: [
    {
      id: 0,
      img: "nintendo-switch-red",
      title: "Diagnostique complet de la console",
      price: "40 €",
      time: "1 heure",
      url: "diagnostique-complet-de-la-console",
      content: `
    <p>Votre console a un soucis, mais vous ne savez pas lequel ? Confiez le nous afin d'obtenir une expertise.</p>
    <p>Le diagnostique matériel de votre console est essentiel pour assurer son bon fonctionnement, optimiser ses performances et protéger vos données. N'hésitez pas à faire réaliser régulièrement un diagnostique de votre console pour en assurer la longévité et la fiabilité.</p>
    `,
    },
    {
      id: 1,
      img: "ps5-gradient",
      title:
        "Nettoyage de la console (dépoussiérage complet + pâte thermique)",
      price: "55 €",
      time: "2 heures",
      url: "nettoyage-de-la-console-depoussierage-complet-pate-thermique",
      content: `
    <p>Faites confiance à nos équipes qui se chargeront de dépoussiérer tous les composants et aérations de votre console.</p>
    <p>Permettez à votre console de respirer (réduit la surchauffe, le bruit et rallonge le temps de vie).</p>
    <p>Le changement de pâte thermique est compris dans le nettoyage !</p>
    `,
    },
    {
      id: 2,
      img: "xbox-s",
      title:
        "Changement/installation de composant(s)",
      price: "80 €",
      time: "1 heure",
      url: "changement-installation-de-composants",
      content: `
    <p>Nos techniciens continuent de suivre les innovations et options de personnalisation du matériel.</p>
    <p>Profitez donc de leur savoir-faire en nous confiant l'assemblage de votre console. Plus qu'un simple montage, votre configuration subira une batterie de tests avant et après assemblage afin que vous puissiez profiter de votre nouvelle console dans les meilleures conditions.</p>
    <p>N’hésitez donc pas à nous confier votre console.</p>
    <ul>
      <li>Changement d'alimentation ;</li>
      <li>Changement de disque dur / ajout de SSD ;</li>
      <li>Changement de lecteur de disque ;</li>
      <li>etc... ;</li>
    </ul>
    `,
    },
    {
      id: 3,
      img: "nintendo-switch-controllers",
      title: "Réparation de tout type de manette",
      price: "40 €",
      time: "1 heure 30 minutes",
      url: "reparation-de-tout-type-de-manette",
      content: `
    <p>Votre manette présente des bugs ou un dysfonctionnement particulier ?</p>
    <p>Avant d’en racheter une confier la à nos techniciens qui vont faire leur possible pour la réparer puis la rendre de nouveau fonctionnelle.</p>
    `,
    },
  ],
};

export default consolesData;
