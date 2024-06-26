interface IProps {
  imagePath: string;
  alt: string;
  className: string;
}

/**
 * A functional component that renders an image with the given properties.
 * this components created becouse the image was repeated and we have two layout for image
 * @param imagePath - The path to the image source.
 * @param alt - The alternative text for the image.
 * @param className - The class name for the image element.
 * @returns A JSX element representing the image.
 */
const Image = ({ imagePath, alt, className }: IProps) => {
  return <img className={className} src={imagePath} alt={alt} />;
};

export default Image;
