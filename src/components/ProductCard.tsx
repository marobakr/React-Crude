import { IProduct } from '../interface';
import Button from '../ui/button';
import { sliceText } from '../utils/function';
import Image from './image';

/**
 * Interface representing the properties for the ProductCard component.
 */
interface IProps {
  /** The product object containing details to be displayed in the card. */
  product: IProduct;
}
/**
 * A functional component that renders a card displaying product card.
 *
 * @param product - The product object containing details to be displayed in the card.
 * @returns A JSX element representing the product card.
 */

const ProductCard = ({ product }: IProps) => {
  /****** DISTRUCTING ******/
  const { category, description, imageURL, price, title } = product;

  return (
    <div className='max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col '>
      {/* -------- Child Component -------- */}
      <Image imagePath={imageURL} alt='title' className='rounded-md mb-2' />

      <h3>{title}</h3>

      <p>{sliceText(description)}</p>

      <div className='flex space-x-2 items-center my-4 cursor-pointer '>
        <span className='w-5 h-5 bg-indigo-600 rounded-full cursor-pointer' />
        <span className='w-5 h-5 bg-blue-600 rounded-full cursor-pointer' />
        <span className='w-5 h-5 bg-pink-600 rounded-full cursor-pointer' />
        <span className='w-5 h-5 bg-red-600 rounded-full cursor-pointer' />
      </div>

      <div className='flex items-center justify-between my-3'>
        <span>{price}</span>

        {/* -------- Child Component -------- */}
        <Image
          imagePath={category.imageURL}
          alt={category.name}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>

      <div className='flex justify-between items-center space-x-2 my-2'>
        {/* -------- Child Component -------- */}
        <Button
          className='bg-indigo-600'
          onClick={() => {
            console.log('edit');
          }}
        >
          EDIT
        </Button>
        <Button className='bg-red-700'>DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
