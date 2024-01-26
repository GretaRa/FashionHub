import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { useShopContext } from "../../App";

const QuantityButton = ({product}) => {
  const { handleAddItem, handleDecrease } = useShopContext();


  const onIncrease = () => {
    if (product.quantity < 9) {
      handleAddItem(product);
    }
  };


  const onDecrease = () => {
    handleDecrease(product.id)
  };


  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={onDecrease}
        className=" bg-gray-300 hover:bg-gray-400 text-gray-600 px-2 py-2 rounded"
      >
        <FaMinus />
      </button>
      <input
        readOnly
        className="text-lg w-4 text-center bg-inherit"
        value={product.quantity}
      ></input>
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
