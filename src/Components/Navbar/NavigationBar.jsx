import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartDisplay from "../Cart/CartDisplay";
import { ShopContext } from "../../App";

const NavigationBar = () => {

  const { cartItems, isCartOpen, handleOpenCart} = useContext(ShopContext);
  const cartItemCount = cartItems.length;

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800">
          FashionHub
        </a>
        <div className="space-x-4 flex">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/shop" className="text-gray-600 hover:text-gray-800">
            Shop
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
          <button
            onClick={handleOpenCart}
            className=" text-gray-600 hover:text-gray-800"
          >
            <div className="flex justify-center items-center">
              <div className="relative ">
                {cartItemCount === 0 ? null : (
                  <div className="absolute top-0 right-0 -mt-1 -mr-1 w-4 h-4 bg-red-500 rounded-full flex justify-center items-center">
                    <p className="text-white text-xs">{cartItemCount}</p>
                  </div>
                )}
                <FaCartShopping className="text-2xl" />
              </div>
            </div>
          </button>
        </div>
      </div>
      {isCartOpen && (
        <CartDisplay/>
      )}
    </nav>
  );
};

export default NavigationBar;
