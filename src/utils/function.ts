/**
 *
 * @param {string} text - the input text to be sliced
 * @param {number} [maxLength=50] - the maximum length of the input
 * @returns  the input text
 */

export const sliceText = (text: string, maxLength: number = 80) => {
  if (text.length > maxLength) return `${text.slice(0, maxLength)}...`;
  return text;
};
