import { Triangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Triangle
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  );
};

export { Loader };
