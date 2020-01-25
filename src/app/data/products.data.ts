import { generate } from "shortid";

export interface Product {
  id: string;
  name: string;
}

export const productsData: Product[] = [
  {
    id: generate(),
    name: "iPhone"
  },
  {
    id: generate(),
    name: "iPhone 2"
  },
  {
    id: generate(),
    name: "iPhone 3"
  },
  {
    id: generate(),
    name: "iPhone 3s"
  },
  {
    id: generate(),
    name: "iPhone 4"
  },
  {
    id: generate(),
    name: "iPhone 4s"
  },
  {
    id: generate(),
    name: "iPhone 5"
  },
  {
    id: generate(),
    name: "iPhone 5s"
  },
  {
    id: generate(),
    name: "iPhone 6"
  },
  {
    id: generate(),
    name: "iPhone 6s"
  },
  {
    id: generate(),
    name: "iPhone 6 Plus"
  },
  {
    id: generate(),
    name: "iPhone 6s Plus"
  }
];
