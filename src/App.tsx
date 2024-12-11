import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Circel from './components/circel';
import Errors from './components/errors';
import ProductCard from './components/ProductCard';
import { colorList, formInputList, productList } from './data';
import { IProdcutValidations, IProduct } from './interface';
import Button from './ui/button';
import Input from './ui/Input';
import Modal from './ui/Modal';
import { productValidation } from './validation';

function App() {
  /* ======== Pass the Object ot State ========*/
  const defaultProductObject = {
    title: '',
    description: '',
    imageURL: '',
    price: '',
    colors: [],
    category: {
      name: '',
      imageURL: '',
    },
  };

  /* --------- STATE --------- */
  const [isOpen, setIsOpen] = useState(false);

  const [product, setProduct] = useState<IProduct>(defaultProductObject);

  const [products, setProducts] = useState<IProduct[]>(productList);

  const [tempColor, setTempColor] = useState<string[]>([]);

  const [errorsMsg, setErrosMsg] = useState({
    description: '',
    imageURL: '',
    price: '',
    title: '',
  });

  /* 
    =============================
    ========== HANDLER ========== 
    =============================
  */
  console.log(tempColor);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onChangeHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    setProduct({ ...product, [name]: value });
    setErrosMsg({ ...errorsMsg, [name]: '' });
    event.preventDefault();
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    /* Prodcut List Validations */
    const productValidations: IProdcutValidations = {
      title: product.title,
      description: product.description,
      imageURL: product.imageURL,
      price: product.price,
    };

    /* Validation */
    const errors = productValidation(productValidations);
    setErrosMsg(errors);

    /* Check If Any Property has a value of "" && check if all properties have a value of ""  */
    const hasError =
      Object.values(errors).some((value) => value === '') &&
      Object.values(errors).every((value) => value === '');
    if (!hasError) {
      return;
    }

    /* Add New Product to the List */
    setProducts((prev) => [
      { ...product, id: uuidv4(), colors: tempColor },
      ...prev,
    ]);

    /* Clear Input Fields OF All Settings */
    setProduct(defaultProductObject);
    setTempColor([]);
    closeModal();
  };

  const onCancel = (): void => {
    setProduct(defaultProductObject);
    closeModal();
  };

  /* 
      =============================
      ========== RENDER =========== 
      =============================
  */
  const renderProductsList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInput = formInputList.map((input) => (
    <div key={input.id} className='flex flex-col '>
      <label
        className='mb-[2px] text-sm font-medium text-gray-700'
        htmlFor={input.id}
      >
        {input.label}
      </label>

      <Input
        value={product[input.name]}
        onChange={onChangeHandle}
        name={input.name}
        type={input.type}
        id={input.id}
      />
      <Errors msgeError={errorsMsg[input.name]} />
    </div>
  ));

  const renderProductsColor = colorList.map((color) => (
    <Circel
      key={color}
      color={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColor((prevTem) => [...prevTem, color]);
      }}
    />
  ));

  return (
    <main className='container my-7'>
      <div className='flex'>
        <h1 className='text-black text-6xl flex-1 capitalize'>
          latest{' '}
          <span className='text-indigo-600'>
            Products [{renderProductsList.length}]
          </span>
        </h1>
        <Button
          onClick={openModal}
          width='w-fit'
          className='bg-indigo-600 hover:bg-indigo-400 '
        >
          ADD NOW
        </Button>
      </div>

      <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md'>
        {renderProductsList}
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} title='ADD A NEW TITLE'>
        <form className='space-y-3' onSubmit={submitHandler}>
          {renderFormInput}
          <div className='flex items-center space-x-2'>
            {renderProductsColor}
          </div>
          <div className='flex items-center flex-wrap  '>
            {tempColor.map((color) => (
              <span
                style={{ backgroundColor: color }}
                className='rounded-[5px] p-1 text-white text-sm m-1'
                key={color}
              >
                {color}
              </span>
            ))}
          </div>

          <div className='flex space-x-2 items-center'>
            <Button className='bg-indigo-700 hover:bg-indigo-800'>
              Submit
            </Button>
            <Button
              onClick={onCancel}
              className='bg-gray-300 hover:bg-gray-400'
            >
              Cansel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
