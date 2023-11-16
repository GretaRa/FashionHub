import { FaMinus } from "react-icons/fa6"
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1);

  const onIncrease = () => {
    if (quantity < 9) {
      setQuantity(quantity + 1);
    };
  };
  
  const onDecrease = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1);
      };
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={onDecrease}
        className=" bg-gray-300 hover:bg-gray-400 text-gray-600 px-2 py-2 rounded"
      >
        <FaMinus />
      </button>
      <input className="text-xl w-4 font-semibold text-center" value={quantity}></input>
      <button
        onClick={onIncrease}
        className="bg-gray-300 hover:bg-gray-400 text-gray-600 px-2 py-2 rounded"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default QuantityButton;
