import { FaRectangleXmark } from "react-icons/fa6";
import CartItem from "./CartItem";

const CartDisplay = ({ cartItems, onRemoveItem, onClose }) => {
  
  const handleCloseCart = () => {
    onClose();
  };

  const CartItemSum = cartItems.map((product) => product.price).reduce((a, b) => a + b, 0);

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg z-50 p-4 border-l">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold mb-4">Your cart</h2>
        <button
          onClick={handleCloseCart}
          className="text-2xl hover:text-gray-800"
        >
          <FaRectangleXmark />
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="flex flex-col gap-10">
          {cartItems.map((product) => (
            <li key={product.id}>
              <CartItem product={product} onRemoveItem={onRemoveItem} />
            </li>
          ))}
        </ul>
      )}
      <div className="text-lg flex justify-between mt-4">
        <div>
          <p>Subtotal</p>
          <p className="text-xs text-gray-600">Tax included. Shipping calculated at checkout.</p>
        </div>
        <p>{CartItemSum} €</p>
      </div>
      <button
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
      >
        Checkout
      </button>
    </div>
  );
};

export default CartDisplay;
