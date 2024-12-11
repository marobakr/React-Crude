import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The content to be rendered inside the button. */
  children: ReactNode;
  className: string;
  width?: 'w-full' | 'w-fit';
}
/**
 * A functional component that renders a button with customizable properties.
 */

const Button = (props: IProps) => {
  const { className, children, width = 'w-full', ...restProps } = props;
  return (
    <button
      className={`p-2 ${width} rounded-md text-white ${className}`}
      /* restProps Refer to onCLickFun */
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
