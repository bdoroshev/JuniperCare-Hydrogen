import { Link, Image } from "@shopify/hydrogen";
import { Drawer, useDrawer } from "./Drawer.client";
import { CartDetails } from "./CartDetails.client";
import { useState } from "react";
import CartCounter from "./CartCounter.client";

import logo from "../../assets/logo.svg";
import burger from "../../assets/burger.svg";
import cart from "../../assets/cart.svg";

export default function Header() {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const { isOpen, openDrawer, closeDrawer } = useDrawer();

  return (
    <>
      <header className="desktop-header hidden lg:block">
        <div className="items-center container justify-between mt-6 mb-10 gap-3 grid grid-cols-3">
          <nav className="flex gap-4">
            <Link to="/" className="hover:underline text-xs">
              HOME
            </Link>
            <Link to="/about" className="hover:underline text-xs">
              ABOUT
            </Link>
          </nav>
          <Link to="/" className="max-w-[200px] cursor-pointer m-auto">
            <Image src={logo} width="100%" height="auto" alt="title" />
          </Link>
          <nav className="flex gap-4 ml-auto">
            <button onClick={openDrawer} className="hover:underline text-xs">
              CART <CartCounter />
            </button>
          </nav>
        </div>
        <div className="bg-[#E4E4E4]">
          <div className="container items-center justify-between gap-3 py-7 flex">
            <Link
              to="/collections/skincare"
              className="hover:underline font-bold text-sm"
            >
              SKINCARE
            </Link>
            <Link
              to="/collections/skin-features"
              className="hover:underline font-bold text-sm"
            >
              SKIN FEATURES
            </Link>
            <Link
              to="/collections/sun-care"
              className="hover:underline font-bold text-sm"
            >
              SUN CARE
            </Link>
            <Link
              to="/collections/makeup"
              className="hover:underline font-bold text-sm"
            >
              MAKEUP
            </Link>
            <Link
              to="/collections/gift-sets"
              className="hover:underline font-bold text-sm"
            >
              GIFT SETS
            </Link>
            <Link
              to="/collections/expert-advice"
              className="hover:underline font-bold text-sm"
            >
              EXPERT ADVICE
            </Link>
            <Link
              to="/collections/la-roche-posay-services"
              className="hover:underline font-bold text-sm"
            >
              JUNIPERCARE SERVICES
            </Link>
          </div>
        </div>
      </header>
      <header className="desktop-mobile block lg:hidden overflow-hidden relative">
        <div className="items-center container justify-between mt-6 mb-10 gap-3 flex">
          <button className="max-w-[25px]" onClick={openDrawer}>
            <Image src={cart} width="100%" height="auto" alt="cart" />
          </button>
          <Link to="/" className="max-w-[200px] block m-auto">
            <Image src={logo} width="100%" height="auto" alt="title" />
          </Link>
          <button
            className="max-w-[20px]"
            onClick={() => setShowBurgerMenu(true)}
          >
            <Image src={burger} width="100%" height="auto" alt="burger" />
          </button>

          <div
            className={`fixed transition-all top-0 flex flex-col bg-white min-h-screen w-screen px-5 py-8 z-10 overflow-auto ${
              showBurgerMenu ? "right-0" : "-right-[100vw]"
            }`}
          >
            <button
              className="max-w-[20px] ml-auto font-bold text-2xl"
              onClick={() => setShowBurgerMenu(false)}
            >
              x
            </button>
            <nav className="flex flex-col gap-4 mt-2">
              <Link
                to="/home"
                className="font-bold"
                onClick={() => setShowBurgerMenu(false)}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="font-bold"
                onClick={() => setShowBurgerMenu(false)}
              >
                ABOUT
              </Link>
              <Link
                to="/collections/skincare"
                className="font-bold"
                onClick={() => setShowBurgerMenu(false)}
              >
                SKINCARE
              </Link>
              <Link
                to="/collections/skin-features"
                className="font-bold"
                onClick={() => setShowBurgerMenu(false)}
              >
                SKIN FEATURES
              </Link>
              <Link
                to="/collections/sun-care"
                className="font-bold"
                onClick={() => setShowBurgerMenu(false)}
              >
                SUN CARE
              </Link>
              <Link
                to="/collections/makeup"
                className="font-bold"
                onClick={() => setShowBurgerMenu(false)}
              >
                MAKEUP
              </Link>
              <Link
                to="/collections/gift-sets"
                className="font-bold"
                onClick={() => setShowBurgerMenu(false)}
              >
                GIFT SETS
              </Link>
              <Link
                to="/collections/expert-advice"
                className="font-bold"
                onClick={() => setShowBurgerMenu(false)}
              >
                EXPERT ADVICE
              </Link>
              <Link
                to="/collections/la-roche-posay-services"
                className="font-bold"
                onClick={() => setShowBurgerMenu(false)}
              >
                JUNIPERCARE SERVICES
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="relative">
        <Drawer open={isOpen} onClose={closeDrawer}>
          <div className="grid">
            <Drawer.Title>
              <h2 className="sr-only">Cart Drawer</h2>
            </Drawer.Title>
            <CartDetails onClose={closeDrawer} />
          </div>
        </Drawer>
      </div>
    </>
  );
}
