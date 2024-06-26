import { InputHTMLAttributes } from 'react';

/**
 * Interface representing the properties for the Input component,
 * extending the standard HTML input element attributes.
 */

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

/**
 * A functional component that renders an input element with customizable properties.
 *
 * @param rest - Additional properties to be spread onto the input element.
 * @returns A JSX element representing the input.
 */
const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className='border border-gray-300 shadow-md focus:border-indigo-500 focus:outline-none focus:ring-1
  focus:ring-indigo-500 rounded-xl px-3 py-3 text-md '
      {...rest}
    />
  );
};

export default Input;
