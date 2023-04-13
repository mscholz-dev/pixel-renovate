import { ChangeEvent } from "react";

export type THeaderLinks = {
  id: number;
  url: string;
  title: string;
  icon: JSX.Element;
}[];

export type TNotionService = {
  cover: {
    file: {
      url: string;
    };
  };
  id: string;
  properties: {
    Catégorie: {};
    Nom: {
      title: [
        {
          plain_text: string;
        },
      ];
    };
    "Temps estimé": {
      rich_text: [
        {
          plain_text: string;
        },
      ];
    };
    "À partir de": {
      rich_text: [
        {
          plain_text: string;
        },
      ];
    };
  };
};

export type THomeBenefits = {
  id: number;
  icon: JSX.Element;
  blob: JSX.Element;
  title: string;
  text: string;
}[];

export type THomeTroubleshootings = {
  id: number;
  icon: JSX.Element;
  title: string;
  text: string;
}[];

export type THomeReviews = {
  id: number;
  imgSrc: string;
  imgAlt: string;
  name: string;
  subject: string;
  text: string;
}[];

export type THomeSchedules = {
  id: number;
  day: string;
  hours: string;
}[];

export type THomeFaqQuestions = {
  id: number;
  title: string;
  text: string;
}[];

export type TFooterSocialLinks = {
  id: number;
  icon: JSX.Element;
  url: string;
  title: string;
}[];

export type TGetServicesReturn = {
  data: object[];
  err: string | null;
};

export type TCardService = {
  id: string;
  imgSrc: string;
  title: string;
  time: string;
  price: string;
  url: string;
};

export type TSpecificService = {
  imgSrc: string;
  title: string;
  time: string;
  price: string;
  content: TContentService;
};

export type TGetSpecificServiceReturn = {
  data: TSpecificService | null;
  err: string | null;
};

export type TContentService = {
  type: "h3" | "ul" | "ol" | "p";
  value: string;
}[];

export type TFormInput = {
  icon: JSX.Element;
  id: string;
  handleChange: (e: ChangeEvent) => void;
  label: string;
  type: "text" | "email" | "number";
  value: string;
  min: number;
  max: number;
  ariaDescribedby: string;
};

export type TInspectData = Record<string, any>;

export type TInspectDataErrors = {
  key: string;
  message: string;
}[];

export type TSupportForm = {
  fullName: string;
  email: string;
  phone: string;
  postalCode: string;
  city: string;
  deviceType: string;
  brand: string;
  model: string;
  service: string;
  breakdown: string;
  consent: boolean;
};

export type TTypeServiceProps = {
  type: string;
  service: string;
};

export type TServiceData = {
  id: number;
  img: string;
  title: string;
  price: string;
  time: string;
  url: string;
  content: string;
}[];
