import QuantityButton from "./QuantityButton";
import { FaRegTrashCan } from "react-icons/fa6";
import { useShopContext } from "../../App";

const CartItem = ({ product }) => {
  const { handleRemoveItem } = useShopContext();
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
          className=" w-full h-24 object-contain"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="grid grid-cols-[60%_1fr] gap-2">
        <div className="col-start-1 col-end-1">{product.title}</div>
        <div className="col-start-2 col-end-2 text-gray-600">
          {product.price.toFixed(2)} €
        </div>
        <div className="col-span-2 flex gap-2">
          <QuantityButton />
          <button
            className="text-red-600 hover:text-red-800 text-xl"
            onClick={() => handleRemoveItem(product.id)}
          >
            <FaRegTrashCan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
