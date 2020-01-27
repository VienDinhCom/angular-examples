export interface Product {
  id?: string;
  name: string;
}

export const productsData: Product[] = [
  {
    name: "iPhone"
  },
  {
    name: "iPhone 2"
  },
  {
    name: "iPhone 3"
  },
  {
    name: "iPhone 3s"
  },
  {
    name: "iPhone 4"
  },
  {
    name: "iPhone 4s"
  },
  {
    name: "iPhone 5"
  },
  {
    name: "iPhone 5s"
  },
  {
    name: "iPhone 6"
  },
  {
    name: "iPhone 6s"
  },
  {
    name: "iPhone 6 Plus"
  },
  {
    name: "iPhone 6s Plus"
  }
].map((product, id) => ({ ...product, id: id.toString() }));
