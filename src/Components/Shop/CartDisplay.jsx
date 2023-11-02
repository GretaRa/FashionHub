import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";

const CartDisplay = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItems = [{ name: "necklace", price: 100, id: 1 },
  { name: "earrings", price: 50, id: 2 },];

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleOpenCart}
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Open Cart
      </button>
      {isCartOpen && (
        <div className="fixed inset-0 bg-gray-900 opacity-50 z-40" onClick={handleCloseCart}></div>
      )}
      {isCartOpen && <ShoppingCart cartItems={cartItems} onClose={handleCloseCart} />}
    </div>
  );
};

export default CartDisplay;