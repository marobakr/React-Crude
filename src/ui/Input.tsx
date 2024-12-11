import { InputHTMLAttributes } from 'react';

/**
 * Interface representing the properties for the Input component,
 * extending the standard HTML input element attributes.
 */

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

/**
 * @param rest - Additional properties to be spread onto the input element.
 */
const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className='border-[1px] border-gray-300 shadow-md focus:border-indigo-500 focus:outline-none focus:ring-1
  focus:ring-indigo-500 rounded-md px-3 py-3 text-md '
      {...rest}
    />
  );
};

export default Input;
