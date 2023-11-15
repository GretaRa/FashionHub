import { FaRectangleXmark } from "react-icons/fa6";
import CartItem from "./CartItem";

const CartDisplay = ({ cartItems, onRemoveItem, onClose }) => {
  const handleCloseCart = () => {
    onClose();
  };

  return (
    <div className="fixed right-0 top-0 h-full w-72 bg-white shadow-lg z-50 p-4 border-l">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
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
    </div>
  );
};

export default CartDisplay;
