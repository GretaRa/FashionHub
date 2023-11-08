const CartDisplay = ({ cartItems, onRemoveItem, onClose }) => {
  const handleCloseCart = () => {
    onClose();
  };

  
  
  return (
    <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-50 p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map(item => (
            <li key={item.id}>
              <div className="flex items-center justify-between">
                <span>{item.name}</span>
                <span className="text-gray-600">${item.price.toFixed(2)}</span>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleCloseCart}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Close
      </button>
    </div>
  );
};

export default CartDisplay;