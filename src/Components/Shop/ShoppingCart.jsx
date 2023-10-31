import NavigationBar from "../Navbar/NavigationBar";
import Footer from "../Footer";

const ShoppingCart = () => {
  const cartItems = [
    { name: "necklace", price: 100, id: 1 },
    { name: "earrings", price: 50, id: 2 },
  ];

  return ( 
    <>
      <NavigationBar />
      <div className="min-h-screen">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold mb-4">Your Shopping Cart</h2>
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
          total: 150 €
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;

