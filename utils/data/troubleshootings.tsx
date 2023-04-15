import IconStopwatch from "@/public/icons/stopwatch.svg";
import IconPin from "@/public/icons/pin.svg";
import IconPiggyBank from "@/public/icons/piggy-bank.svg";
import IconThumbUp from "@/public/icons/thumb-up.svg";

// types
import { TTroubleshootingsData } from "../types";

const troubleshootingsData: TTroubleshootingsData =
  [
    {
      id: 0,
      icon: <IconStopwatch />,
      title: "Rapidité",
      text: "Vous pouvez obtenir une assistance technique rapidement sans avoir à attendre qu'un technicien se déplace physiquement sur votre site.",
    },
    {
      id: 1,
      icon: <IconPin />,
      title: "Flexibilité",
      text: "Nous diagnostiquons et résolvons votre problème informatique à distance : aucun déplacement n'est requis dans 90% des cas.",
    },
    {
      id: 2,
      icon: <IconPiggyBank />,
      title: "Tarifs forfaitaires",
      text: "Nos tarifs sont fixes et forfaitaires : il n'y a aucun dépassement de prix. Le dépannage est souvent moins cher que les services de dépannage en personne.",
    },
    {
      id: 3,
      icon: <IconThumbUp />,
      title: "Dépanné ou remboursé",
      text: 'Nos prestations unitaires sont garanties "Dépanné ou Remboursé" : vous ne payez que si votre problème est résolu !',
    },
  ];

export default troubleshootingsData;
