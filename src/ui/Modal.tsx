import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ReactNode } from 'react';

interface IProps {
  /** Determines if the modal is open or closed. */
  isOpen: boolean;

  /** Function to close the modal. */
  closeModal: () => void;

  /** Optional title for the modal dialog. */
  title?: string;

  /** Content to be rendered inside the modal dialog. */
  children: ReactNode;
}

const Modal = ({ title, closeModal, isOpen, children }: IProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as='div'
        className='relative z-10 focus:outline-none'
        onClose={closeModal}
        __demoMode
      >
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto bg-mycolor'>
          <div
            className='flex min-h-full items-center justify-center p-4
          
          '
          >
            <DialogPanel
              transition
              className='w-full max-w-md rounded-xl bg-gray-200 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
            >
              {/**
               *  if title is true ? return <DialogTitle/>
               */}
              {title && (
                <DialogTitle
                  as='h3'
                  className='text-base/7 font-medium text-gray-700'
                >
                  {title}
                </DialogTitle>
              )}

              <p className='mt-2 text-sm/6 text-gray-700'>
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
              <div className='mt-4'>{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default Modal;
