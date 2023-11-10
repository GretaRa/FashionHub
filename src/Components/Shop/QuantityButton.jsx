

const QuantityButton = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={onDecrease}
        className="bg-gray-300 hover:bg-gray-400 text-gray-600 px-2 py-1 rounded"
      >
        -
      </button>
      <span className="text-xl font-semibold">{quantity}</span>
      <button
        onClick={onIncrease}
        className="bg-gray-300 hover:bg-gray-400 text-gray-600 px-2 py-1 rounded"
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
