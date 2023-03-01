import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function Drawer({ open, onClose, children }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 top-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 top-0 flex max-w-full h-screen lg:h-[90vh]">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-y-full"
                enterTo="translate-y-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-y-0"
                leaveTo="-translate-y-full"
              >
                <Dialog.Panel className="w-screen transform text-left align-middle shadow-xl transition-all antialiased bg-neutral-50">
                  <header className="container sticky top-0 flex items-center justify-between h-20 lg:h-24 lg:mb-10">
                    <h2>
                      REVIEW CART
                    </h2>
                    <button
                      type="button"
                      className="p-4 -m-4 transition text-primary hover:text-primary/50"
                      onClick={onClose}
                    >
                      <IconClose aria-label="Close panel" />
                    </button>
                  </header>
									<div className="container">
										<div className="border-b hidden md:grid lg:grid-cols-5 items-center justify-center w-full pb-3 border-gray text-gray text-sm font-bold">
											<h3 className="col-span-3 lg:col-span-2">PRODUCT</h3>
											<h3 className="text-right">QTY</h3>
											<h3 className="text-right">TOTAL</h3>
										</div>
									</div>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

/* Use for associating `aria-labelledby` with the title */
Drawer.Title = Dialog.Title;

export { Drawer };

export function useDrawer(openDefault = false) {
  const [isOpen, setIsOpen] = useState(openDefault);

  function openDrawer() {
    setIsOpen(true);
  }

  function closeDrawer() {
    setIsOpen(false);
  }

  return {
    isOpen,
    openDrawer,
    closeDrawer,
  };
}

function IconClose() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="w-5 h-5"
    >
      <title>Close</title>
      <line
        x1="4.44194"
        y1="4.30806"
        x2="15.7556"
        y2="15.6218"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <line
        y1="-0.625"
        x2="16"
        y2="-0.625"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 16 4.75)"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}
