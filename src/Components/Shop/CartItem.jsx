import QuantityButton from "./QuantityButton";

const CartItem = ({item, onRemoveItem}) => {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <div className="grid grid-cols-[25%_1fr] gap-5">
      <div className="relative overflow-hidden w-full">
        <img
          className=" absolute"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt={item.name}
        />
      </div>
      <div className="grid grid-cols-[60%_1fr] gap-2">
        <div className="col-start-1 col-end-1">{item.name}</div>
        <div className="col-start-2 col-end-2 text-gray-600">
          {item.price.toFixed(2)} €
        </div>
        <div className="col-span-2">
          <QuantityButton/>
          <input type="number" />
          <button
            className="text-red-600 hover:text-red-800"
            onClick={() => onRemoveItem(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
};

export default CartItem;