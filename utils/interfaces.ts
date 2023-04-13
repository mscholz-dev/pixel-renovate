import { ChangeEvent } from "react";
import { NextPageContext } from "next";

// types
import {
  TCardService,
  TSpecificService,
  TFormInput,
} from "./types";

export interface IGetServicesPage {
  data: object[];
}

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
  items: TCardService[];
  category: string;
  type: string;
}

export interface ICardService {
  imgSrc: string;
  title: string;
  time: string;
  price: string;
  url: string;
  category: string;
  type: string;
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
}

export interface IServiceUrlPage
  extends TSpecificService {}

export interface ISSRServiceUrlPage
  extends NextPageContext {
  params: {
    url: string;
  };
}

export interface ISpecificService
  extends TSpecificService {
  type: string;
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
  children: JSX.Element;
}
