import { FaRectangleXmark } from "react-icons/fa6";
import CartItem from "./CartItem";
import { useShopContext } from "../../App";
import OutsideAlerter from "../OutsideAlerter";

const CartDisplay = () => {
  const { cartItems, handleCloseCart } = useShopContext();

  const CartItemSum = cartItems
    .map((product) => product.price * product.quantity)
    .reduce((a, b) => a + b, 0);

  return (
    <OutsideAlerter>
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg z-50 p-4 border-l overflow-y-scroll">
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
                <CartItem product={product} />
              </li>
            ))}
          </ul>
        )}
        <div className="fixed bottom-0 z-50 bg-inherit pb-4">
          <div className="text-lg flex justify-between mt-4">
            <div>
              <p>Subtotal</p>
              <p className="text-xs text-gray-600">
                Tax included. Shipping calculated at checkout.
              </p>
            </div>
            <p>{CartItemSum.toFixed(2)} €</p>
          </div>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600">
            Checkout
          </button>
        </div>
      </div>
    </OutsideAlerter>
  );
};

export default CartDisplay;
