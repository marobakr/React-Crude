import { IProduct } from '../interface';
import Button from '../ui/button';
import { sliceText } from '../utils/function';
import Circel from './circel';
import Image from './image';

interface IProps {
  /** The product object containing details to be displayed in the card. */
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  /*********************** DISTRUCTING ***********************/
  const { category, description, imageURL, price, title, colors } = product;
  /* 
      =============================
      ========== RENDER =========== 
      =============================
  */
  const renderProductsColor = colors.map((color) => (
    <Circel key={color} color={color} />
  ));

  return (
    <div className='max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col '>
      {/* -------- Child Component -------- */}
      <Image imagePath={imageURL} alt='title' tailwindClass='rounded-md mb-2' />
      <h3>{title}</h3>
      <p>{sliceText(description)}</p>

      {/* -------- Colors Component -------- */}
      <div className='flex items-center space-x-2'>{renderProductsColor}</div>

      <div className='flex items-center justify-between my-3'>
        <span>{price}</span>

        {/* -------- Child Component Image -------- */}
        <Image
          /* Props */
          imagePath={category.imageURL}
          alt={category.name}
          tailwindClass='w-10 h-10 rounded-full object-cover'
        />
      </div>
      <div className='flex justify-between items-center space-x-2 my-2'>
        {/* -------- Button Component -------- */}
        <Button
          /* Props */
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
