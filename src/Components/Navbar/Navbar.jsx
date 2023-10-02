import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  // function handleCount() {
  //   setCount(count + 1);
  // }

  return (
    <nav className="bg-slate-500">
          <ul className="flex gap-10 justify-end items-center mx-10 py-5 text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">
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
            </li>
          </ul>
    </nav>
  );
}

export default Navbar;