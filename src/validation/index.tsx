/* ProductObject Validations */

import { IProdcutValidations } from '../interface';

export const productValidation = (prodcut: IProdcutValidations) => {
  const error: IProdcutValidations = {} as IProdcutValidations;

  const validUrl = /\.(jpeg|jpg|gif|png|bmp|webp|svg)$/i.test(prodcut.imageURL);

  if (
    prodcut.title.length <= 10 ||
    prodcut.title.length >= 80 ||
    /* Check If String doesn't have value  */
    !prodcut.title.trim()
  ) {
    error.title = 'invalid title';
  }
  if (
    prodcut.description.length <= 10 ||
    prodcut.description.length >= 80 ||
    !prodcut.description.trim()
  ) {
    error.description = 'invalid description';
  }
  if (isNaN(+prodcut.price) || !prodcut.price.trim()) {
    error.price = 'invalid price';
  }
  if (!prodcut.imageURL.trim() || !validUrl) {
    error.imageURL = 'invalid imageURL';
  }
  return error;
};
