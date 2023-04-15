import IconBugSlash from "@/public/icons/bug-slash.svg";
import IconDisk from "@/public/icons/disk.svg";
import IconMedal from "@/public/icons/medal.svg";
import IconSpray from "@/public/icons/spray.svg";
import IconTools from "@/public/icons/tools.svg";
import IconComputerRepair from "@/public/icons/computer-repair.svg";
import BlobBenefitsOne from "@/public/blobs/benefits-one.svg";
import BlobBenefitsTwo from "@/public/blobs/benefits-two.svg";
import BlobBenefitsThree from "@/public/blobs/benefits-three.svg";
import BlobBenefitsFour from "@/public/blobs/benefits-four.svg";
import BlobBenefitsFive from "@/public/blobs/benefits-five.svg";
import BlobBenefitsSix from "@/public/blobs/benefits-six.svg";

// types
import { TBenefitsData } from "../types";

const benefitsData: TBenefitsData = [
  {
    id: 0,
    icon: <IconTools />,
    blob: <BlobBenefitsOne />,
    title: "Réparation et dépannage",
    text: "Des problèmes avec votre ordinateur ? Nous sommes là pour vous aider avec notre service de réparation et de dépannage informatique.",
  },
  {
    id: 1,
    icon: <IconBugSlash />,
    blob: <BlobBenefitsTwo />,
    title: "Désinfection de virus",
    text: "Des virus ou des logiciels malveillants perturbent le fonctionnement de votre ordinateur ? Nous proposons une désinfection rapide et efficace.",
  },
  {
    id: 2,
    icon: <IconComputerRepair />,
    blob: <BlobBenefitsThree />,
    title: "Montage et installation",
    text: "Vous souhaitez faire monter ou installer du matériel informatique ? Nous sommes spécialisés dans le montage et l'installation de tout type de composant.",
  },
  {
    id: 3,
    icon: <IconDisk />,
    blob: <BlobBenefitsFour />,
    title: "Récupération de données",
    text: "Besoin de récupérer des données importantes ? Nous offrons un service de récupération de données avec un taux de réussite élevé.",
  },
  {
    id: 4,
    icon: <IconSpray />,
    blob: <BlobBenefitsFive />,
    title: "Entretien et nettoyage",
    text: "L'entretien et le nettoyage régulier de votre ordinateur sont essentiels pour garantir un fonctionnement optimal à long terme. Nous pouvons vous aider avec cela aussi.",
  },
  {
    id: 5,
    icon: <IconMedal />,
    blob: <BlobBenefitsSix />,
    title: "Service de qualité",
    text: "Nous sommes déterminés à fournir un service de qualité à tous nos clients. Faites confiance à notre équipe d'experts pour résoudre tous vos problèmes informatiques.",
  },
];

export default benefitsData;
