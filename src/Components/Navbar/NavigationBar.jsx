import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  // function handleCount() {
  //   setCount(count + 1);
  // }

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
          <Link to="/shopping-cart" className=" text-gray-600 hover:text-gray-800">
            <div className="flex justify-center items-center">
              <div className="relative ">
                {count === 0 ? null : (
                  <div className="absolute top-0 right-0 -mt-1 -mr-1 w-4 h-4 bg-red-500 rounded-full flex justify-center items-center">
                    <p className="text-white text-xs">{count}</p>
                  </div>
                )}
                <FaCartShopping className="text-2xl" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
