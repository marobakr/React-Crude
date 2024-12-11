/* ProductObject Validations */

import { IProdcutValidations } from '../interface';

export const productValidation = (prodcut: IProdcutValidations) => {
  const error: IProdcutValidations = {
    description: '',
    imageURL: '',
    price: '',
    title: '',
  };

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(prodcut.imageURL);

  if (
    prodcut.title.length < 10 ||
    prodcut.title.length > 80 ||
    /* Check If String doesn't have value  */
    !prodcut.title.trim()
  ) {
    error.title = 'invalid title';
  }
  if (
    prodcut.description.length < 10 ||
    prodcut.description.length > 800 ||
    !prodcut.description.trim()
  ) {
    error.description = 'invalid description';
  }
  if (isNaN(Number(prodcut.price)) || !prodcut.price.trim()) {
    console.log('number', isNaN(Number(prodcut.price)));
    error.price = 'invalid price';
  }
  if (!prodcut.imageURL.trim() || !validUrl) {
    error.imageURL = 'invalid imageURL';
  }
  return error;
};
