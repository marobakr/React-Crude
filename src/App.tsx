import { useState } from 'react';
import ProductCard from './components/ProductCard';
import { formInputList, productList } from './data';
import Modal from './ui/Modal';
import Button from './ui/button';
import Input from './ui/Input';

function App() {
  /* --------- STATE --------- */
  const [isOpen, setIsOpen] = useState(false);

  /* --------- HANDLER --------- */
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  /* --------- RENDER --------- */
  const renderProductsList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInput = formInputList.map((input) => (
    <div key={input.id} className='flex flex-col '>
      <label
        className='mb-1 text-sm font-medium text-gray-700'
        htmlFor={input.id}
      >
        {input.label}
      </label>
      <Input name={input.name} type={input.type} id={input.id} />
    </div>
  ));

  return (
    <main className='container my-7'>
      <div className='flex'>
        <h1 className='text-black text-6xl flex-1 capitalize'>
          latest <span className='text-indigo-600'>Products</span>
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
        <div className='space-y-3'>
          {renderFormInput}

          <div className='flex space-x-2 items-center'>
            <Button className='bg-indigo-700 hover:bg-indigo-800'>
              Submit
            </Button>
            <Button className='bg-gray-300 hover:bg-gray-400'>Cansel</Button>
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default App;
