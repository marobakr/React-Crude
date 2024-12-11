import { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const Circel = ({ color, ...rest }: IProps) => {
  return (
    <span
      className={` block w-5 h-5 color rounded-full cursor-pointer`}
      style={{ backgroundColor: color }}
      {...rest}
    ></span>
  );
};

export default Circel;
