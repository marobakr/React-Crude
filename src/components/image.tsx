interface IProps {
  imagePath: string;
  alt: string;
  tailwindClass: string;
}

/**
 * A functional component that renders an image with the given properties.
 * this components created becouse the image was repeated and we have two layout for image
 * @returns A JSX element representing the image.
 */
const Image = ({ imagePath, alt, tailwindClass }: IProps) => {
  return <img className={tailwindClass} src={imagePath} alt={alt} />;
};

export default Image;
