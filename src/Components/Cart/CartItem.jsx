import QuantityButton from "./QuantityButton";
import { useState } from "react";

const CartItem = ({ product, onRemoveItem }) => {
  // const [quantity, setQuantity] = useState(product.quantity);

  // const handleIncrease = () => {
  //   setQuantity(quantity + 1);
  //   // You can also update the cart state or perform other actions
  // };

  // const handleDecrease = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //     // You can also update the cart state or perform other actions
  //   }
  // };

  return (
    <div className="grid grid-cols-[25%_1fr] gap-5">
      <div className="relative overflow-hidden w-full">
        <img
          className=" absolute"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt={product.name}
        />
      </div>
      <div className="grid grid-cols-[60%_1fr] gap-2">
        <div className="col-start-1 col-end-1">{product.name}</div>
        <div className="col-start-2 col-end-2 text-gray-600">
          {product.price.toFixed(2)} €
        </div>
        <div className="col-span-2">
          {/* <QuantityButton
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          /> */}
          <input type="number" />
          <button
            className="text-red-600 hover:text-red-800"
            onClick={() => onRemoveItem(product.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
