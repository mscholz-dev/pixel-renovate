import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
} from "react";

// types
import {
  TFormInput,
  TServiceData,
  TSupportForm,
} from "./types";

export interface IPage {
  children: JSX.Element;
  title: string;
  description: string;
  padding?: boolean;
  className?: string;
  noBackgroundAnim?: boolean;
}

export interface IWrapper {
  children: JSX.Element;
  className?: string;
}

export interface ICardSectionService {
  title: JSX.Element;
  items: TServiceData[];
  service: string;
  servicePath: string;
}

export interface ICardService {
  img: string;
  title: string;
  time: string;
  price: string;
  url: string;
  service: string;
  servicePath: string;
}

export interface IBlockCta {
  imgSrc: string;
  imgAlt: string;
  linkUrl: string;
  linkTitle: string;
  title: JSX.Element;
  reverse?: boolean;
  color: "primary" | "secondary";
  icon: JSX.Element;
  noMb?: boolean;
  noMt?: boolean;
}

export interface IFormInput extends TFormInput {}

export interface IFormTextarea {
  id: string;
  handleChange: (e: ChangeEvent) => void;
  label: string;
  value: string;
  min: number;
  max: number;
  ariaDescribedby: string;
  rows: number;
}

export interface IFormSelect {
  label: string;
}

export interface IFormCheckbox {
  id: string;
  handleChange: (e: ChangeEvent) => void;
  label: string;
  checked: boolean;
  ariaDescribedby: string;
}

export interface IFormPage {
  imgSrc: string;
  imgAlt: string;
  children: JSX.Element;
}

export interface IServices {
  service: string;
  servicePath: string;
  data: TServiceData[];
}

export interface IServicesUrl {
  servicePath: string;
  service: string;
  img: string;
  title: string;
  time: string;
  price: string;
  content: string;
}

export interface ISpecificService {
  servicePath: string;
  service: string;
  img: string;
  title: string;
  time: string;
  price: string;
  content: string;
}

export interface IFormSupport {
  loading: boolean;
  form: TSupportForm;
  setForm: Dispatch<SetStateAction<TSupportForm>>;
  handleSubmit: (e: SyntheticEvent) => void;
  service: string;
}

export interface IDemandeDePriseEnCharge {
  service: string;
  title: string;
}

export interface IFormInputMotion {
  children: JSX.Element;
  delay: number;
}
