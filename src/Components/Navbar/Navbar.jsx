import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";

function Navbar() {

  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <nav className="bg-slate-500">
          <ul className="flex gap-10 justify-end items-center mx-10 py-5 text-lg">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/cart">
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
              </a>
            </li>
          </ul>
    </nav>
  );
}

export default Navbar;