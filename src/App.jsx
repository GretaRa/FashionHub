import NavigationBar from "./Components/Navbar/NavigationBar";
import { useState, createContext } from "react";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  openCart: () => {},
  handleCloseCart: () => {},
  handleRemoveItem: () => {},
  handleAddItem: () => {},
  isCartOpen: false,
  closeCart: () => {},
});

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 10.99 },
    { id: 2, name: "Item 2", price: 5.99 },
    { id: 3, name: "Item 3", price: 15.99 },
  ]);

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleAddItem = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  return (
    <ShopContext.Provider value={{ cartItems, handleOpenCart, handleCloseCart, handleAddItem, handleRemoveItem, isCartOpen}}>
    <div>
      <NavigationBar/>
      <Outlet />
      <Footer />
    </div>
    </ShopContext.Provider>
  );
}
