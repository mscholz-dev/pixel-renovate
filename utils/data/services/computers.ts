// types
import { TServiceObject } from "../../types";

const computersData: TServiceObject = {
  service: "ordinateurs",
  servicePath: "computers",
  serviceType: "Ordinateur",
  data: [
    {
      id: 0,
      img: "mac-gradient-semi-open",
      title:
        "Diagnostique complet de l’ordinateur",
      price: "50 €",
      time: "1 heure",
      url: "diagnostique-complet-de-l-ordinateur",
      content: `
    <p>Votre ordinateur a un soucis, mais vous ne savez pas lequel ? Confiez le nous afin d'obtenir une expertise.</p>
    <p>Le diagnostique matériel de votre ordinateur est essentiel pour assurer son bon fonctionnement, optimiser ses performances et protéger vos données. N'hésitez pas à faire réaliser régulièrement un diagnostique de votre ordinateur pour en assurer la longévité et la fiabilité.</p>
    `,
    },
    {
      id: 1,
      img: "mac-malware",
      title:
        "Analyse et suppression des virus, publicités intempestives et tous programmes malveillants",
      price: "60 €",
      time: "2 heures",
      url: "analyse-et-suppression-des-virus-publicites-intempestives-et-tous-programmes-malveillants",
      content: `
    <p>Les statistiques nous montrent que la majorité de nos interventions sont dues à des problèmes d'ordinateurs infectés. Nous sommes habitués à ce type d’intervention et nous pouvons vous garantir l’éradication totale de tous les intrus de votre système. La durée de l’opération peut varier entre 1 heure et 4 heures en fonction de la vitesse, le degré d’infection ou la quantité de données à analyser</p>
    <h3>Comment nous procédons pour supprimer les virus de votre ordinateur :</h3>
    <p>Avec 3 des meilleurs outils spécialisés nous analysons l'ensemble du système de votre ordinateur, le registre, dossiers et les fichiers et de plus nous nettoyons manuellement vos navigateurs, optimisons également les applications de démarrage.</p>
    <h3>Mes dossiers ou fichiers seront ils perdus?</h3>
    <p>Non ! En général, les logiciels malveillants ou virus n'atteignent pas vos données personnelles. Certains cas les plus critiques peuvent imposer la réinstallation complète de votre système, nous sauvegardons alors systématiquement toutes vos données.</p>
    <p>La protection de vos données est pour nous une priorité.</p>
    `,
    },
    {
      id: 2,
      img: "mac-windows-11",
      title:
        "Installation/réinstallation de Windows (7,8,10 et 11 si possibilité)",
      price: "48 €",
      time: "2 heures",
      url: "installation-réinstallation-de-windows-7-8-10-et-11-si-possibilite",
      content: `
    <p>Votre système d’exploitation Windows est devenu instable ? Il est parfois nécessaire de procéder à une réinstallation de Windows pour retrouver un ordinateur stable et fluide.</p>
    <p>L’un de nos technicien informatique se chargera de la réinstallation de Windows se trouvant sur votre PC portable ou ordinateur de bureau, que ce soit Windows 8, Windows 10 ou Windows 11.</p>
    <p>Par ailleurs, si vous le désirez, nous pouvons également procéder à la migration du système d’exploitation Windows de votre ordinateur vers un système d’exploitation Windows plus récent.</p>
    <h3>Mes dossiers ou fichiers seront-ils perdus?</h3>
    <p>Vos données seront sauvegardées et importées dans votre nouveau système d’exploitation.</p>
    `,
    },
    {
      id: 3,
      img: "motherboard",
      title:
        "Installation matériel (disque dur, carte graphique, tout autres composants…)",
      price: "60 €",
      time: "1 heure 30 minutes",
      url: "installation-matériel-disque-dur-carte-graphique-tout-autres-composants",
      content: `
    <p>Nos techniciens continuent de suivre les innovations et options de personnalisation du matériel.</p>
    <p>Profitez donc de leur savoir-faire en nous confiant l'assemblage de votre ordinateur. Plus qu'un simple montage, votre configuration subira une batterie de tests avant et après assemblage afin que vous puissiez profiter de votre nouvel ordinateur dans les meilleures conditions.</p>
    <p>N’hésitez donc pas à nous confier votre ordinateur afin de profiter du montage de composants plus récents et de meilleures qualités.</p>
    `,
    },
    {
      id: 4,
      img: "desktop-pc-open",
      title:
        "Nettoyage interne PC fixe (dépoussiérage complet + ajout de pâte thermique)",
      price: "60 €",
      time: "1 heure",
      url: "nettoyage-interne-pc-fixe-depoussierage-complet-ajout-de-pate-thermique",
      content: `
    <p>La poussière est l'un des pires ennemis de votre PC. Elle peut entraîner surchauffe, lenteurs et plantages. Peur de faire une erreur en ouvrant votre PC ? Laissez nos experts le faire pour vous et donnez un second souffle à votre ordinateur !</p>
    <p>Le changement de pâte thermique est compris dans le nettoyage !</p>
    `,
    },
    {
      id: 5,
      img: "mac-open",
      title:
        "Nettoyage interne PC portable (dépoussiérage complet + ajout de pâte thermique)",
      price: "70 €",
      time: "1 heure 30 minutes",
      url: "nettoyage-interne-pc-portable-depoussierage-complet-ajout-de-pate-thermique",
      content: `
    <p>Faites confiance à nos équipes qui se chargeront de dépoussiérer tous les composants et aérations de votre PC fixe.</p>
    <p>Ne laissez plus surchauffer votre outil de travail (réduit la surchauffe, le bruit et rallonge le temps de vie).</p>
    <p>Le changement de pâte thermique est compris dans le nettoyage !</p>
    `,
    },
    {
      id: 6,
      img: "hard-disk-vertical",
      title: "Récupération des données",
      price: "50 €",
      time: "2 heures 30 minutes",
      url: "recuperation-des-donnees",
      content: `
    <p>Un des éléments suivants caractérise une perte de données :</p>
    <ul>
      <li>Accès aux données d'un support informatique ou d'une sauvegarde impossible ;</li>
      <li>Fichiers corrompus ou inaccessibles dû à un disfonctionnement d'un disque dur, carte SSD, clé USB ou autres cartes mémoires ;</li>
      <li>Fichiers supprimés ou écrasés accidentellement, formatage par erreur, mise de fichier à la corbeille... ;</li>
      <li>Un virus peut également provoquer la perte de données, des mises à jour de logiciels ou du système ayant échouées peuvent en être la cause ;</li>
    </ul>
    <p>Nos techniciens sont capable de récupérer vos données sur les disque dur, SSD, clé USB, etc... Les taux de réussites moyens sont 90%.</p>
    `,
    },
    {
      id: 7,
      img: "hard-disk-diagonal",
      title: "Clonage de disque dur",
      price: "70 €",
      time: "3 heures",
      url: "clonage-de-disque-dur",
      content: `
    <p>Nous transférons les données de votre ancien dur disque vers un/votre nouveau disque SSD.</p>
    <p>La migration se fait par notre logiciel avec une technologie de clonage qui permettra à votre ordinateur de n'avoir aucune différence de fonctionnement en dehors de la rapidité d'exécution qui sera très sensiblement augmenté.</p>
    <p>La configuration reste parfaitement identique pour vous, tout est exactement comme avant.</p>
    <p>Vous retrouvez l'ensemble de vos données, fichiers personnelles, photos, musiques, vidéo, sauvegarde ainsi que toutes vos applications comme si rien ne s'était passé.</p>
    <p>Votre ordinateur sera beaucoup plus rapide. Nous vous garantissons la rapidité.</p>
    `,
    },
    {
      id: 8,
      img: "hard-disk-open",
      title: "Destruction complète des données",
      price: "20 €",
      time: "30 minutes",
      url: "destruction-complete-des-donnees",
      content: `
    <p>Nos techniciens s’occupent de détruire la totalité des données contenues dans le disque dur concerné.</p>
    <p>Vous récupérez votre disque dur neuf et vidé de toutes données.</p>
    `,
    },
  ],
};

export default computersData;
