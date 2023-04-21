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

export type THomeSchedules = {
  id: number;
  day: string;
  hours: string;
}[];

export type TFooterSocialLinks = {
  id: number;
  icon: JSX.Element;
  url: string;
  title: string;
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
  brand: string;
  model: string;
  title: string;
  description: string;
  consent: boolean;
};

export type TServiceData = {
  id: number;
  meta: string;
  img: string;
  title: string;
  price: string;
  time: string;
  url: string;
  content: string;
};

export type TServiceObject = {
  defaultMeta: string;
  service: string;
  servicePath: string;
  data: TServiceData[];
};

export type TGetStaticPathServices = {
  params: { service: string };
}[];

export type TGetStaticPathSpecificService = {
  params: {
    service: string;
    url: string;
  };
}[];

export type TFaqData = {
  id: number;
  title: string;
  content: string;
}[];

export type TReviewsData = {
  id: number;
  imgSrc: string;
  imgAlt: string;
  name: string;
  subject: string;
  text: string;
}[];

export type TBenefitsData = {
  id: number;
  icon: JSX.Element;
  blob: JSX.Element;
  title: string;
  text: string;
}[];

export type TTroubleshootingsData = {
  id: number;
  icon: JSX.Element;
  title: string;
  text: string;
}[];
