import { ChangeEvent } from "react";
import { NextPageContext } from "next";

// types
import {
  TFormInput,
  TServiceData,
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
  category: string;
  servicePath: string;
  serviceType: string;
}

export interface ICardService {
  img: string;
  title: string;
  time: string;
  price: string;
  url: string;
  category: string;
  servicePath: string;
  serviceType: string;
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

export interface IServices {
  service: string;
  servicePath: string;
  serviceType: string;
  data: TServiceData[];
}

export interface IServicesUrl {
  servicePath: string;
  serviceType: string;
  img: string;
  title: string;
  time: string;
  price: string;
  content: string;
}

export interface ISpecificService {
  servicePath: string;
  serviceType: string;
  img: string;
  title: string;
  time: string;
  price: string;
  content: string;
}
