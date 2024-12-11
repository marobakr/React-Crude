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
  name: 'title' | 'description' | 'price' | 'imageURL';
  label: string;
  type: string;
}

export interface IProdcutValidations {
  description: string;
  price: string;
  imageURL: string;
  title: string;
}
