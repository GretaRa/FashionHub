import NavigationBar from "../Navbar/NavigationBar";
import Footer from "../Footer";

const ShoppingCart = ({cartItems}) => {
  

  return ( 
    <>
      <NavigationBar />
      <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 p-4">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold mb-4 my-4">Your Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => {
            return (
              <li key={item.id} className="">
                <div className="flex align-items-center justify-between border-y">
                  <img src="#" alt={item.name} />
                  <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {item.name}
                  </h2>
                  <div className="flex items-center">
                    <label htmlFor={item.name} className="">Quantity:</label>
                    <input type="number" name={item.name} value="1" min="0" pattern="[0-9]*"></input>
                  </div>
                  <p className="text-gray-600">{item.price} €</p>
                  <button className="text-red-600 hover:text-red-800">
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="">
          Total amount: 150 €
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;

