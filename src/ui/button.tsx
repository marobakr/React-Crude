import { ReactNode } from 'react';

/**
 * Interface representing the properties for the Button component.
 */
interface IProps {
  /** The content to be rendered inside the button. */
  children: ReactNode;

  /** Additional class names for styling the button. */
  className: string;

  /** Optional click event handler. */
  onClick?: () => void;

  /** Optional width property, defaults to 'w-full'. */
  width?: 'w-full' | 'w-fit';
}
/**
 * A functional component that renders a button with customizable properties.
 *
 * @param children - The content to be rendered inside the button.
 * @param className - Additional class names for styling the button.
 * @param onClick - Optional click event handler.
 * @param width - Optional width property, defaults to 'w-full'.
 * @param restProps - Additional properties to be spread onto the button element.
 * @returns A JSX element representing the button.
 */

const Button = ({
  className,
  children,
  width = 'w-full',
  ...restProps
}: IProps) => {
  return (
    <button
      className={`p-2 ${width} rounded-md text-white ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
