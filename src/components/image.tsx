interface IProps {
  imagePath: string;
  alt: string;
  className: string;
}

/**
 * this components created becouse the image was repeated and we have two layout for image
 * */
const Image = ({ imagePath, alt, className }: IProps) => {
  return <img className={className} src={imagePath} alt={alt} />;
};

export default Image;
