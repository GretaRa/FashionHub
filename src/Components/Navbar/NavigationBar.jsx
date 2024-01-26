import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CartDisplay from "../Cart/CartDisplay";
import { useShopContext } from "../../App";

const NavigationBar = () => {
  const { cartItems, isCartOpen, handleOpenCart } = useShopContext();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white p-4 shadow-md">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800">
          FashionHub
        </a>
        <ul className="space-x-4 flex">
          <li>
            <Link to="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="text-gray-600 hover:text-gray-800">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </li>
          <li>
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
          </li>
        </ul>
      </nav>
      {isCartOpen && <CartDisplay />}
    </header>
  );
};

export default NavigationBar;
