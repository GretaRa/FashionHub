import NavigationBar from "./Components/Navbar/NavigationBar";
import { useState } from "react";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveItem = (itemId) => {
    // Implement logic to remove items from cart
    // Update the cartItems state
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  return (
    <div>
      <NavigationBar
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        isCartOpen={isCartOpen}
        openCart={openCart}
        onClose={handleCloseCart}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
