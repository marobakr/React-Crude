export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  price: string;
  imageURL: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IFormList {
  id: string;
  name: string;
  label: string;
  type: string;
}
