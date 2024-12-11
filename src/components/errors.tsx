interface IProps {
  msgeError: string;
}

const Errors = ({ msgeError }: IProps) => {
  return msgeError ? (
    <p className='text-red-900 font-semibold text-sm'> {msgeError} </p>
  ) : null;
};

export default Errors;
