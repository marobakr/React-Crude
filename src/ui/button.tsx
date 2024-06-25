import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className: string;
  onClick?: () => void;
  width?: 'w-full' | 'w-fit';
}

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
