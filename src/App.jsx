import NavigationBar from "./Components/Navbar/NavigationBar";
import { useState, createContext, useContext, useEffect } from "react";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import fetchData from "./Components/API/Api";
import ScrollToTop from "./Components/ScrollToTop";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  openCart: () => {},
  handleCloseCart: () => {},
  handleRemoveItem: () => {},
  handleAddItem: () => {},
  handleDecrease: () => {},
  isCartOpen: false,
  closeCart: () => {},
  loading: false,
  error: null,
  selectedCategory: null,
  handleCategoryChange: () => {},
  setSelectedCategory: () => {},
});

//Custom hook for context
export function useShopContext() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }
  return context;
}

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleAddItem = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id,
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity < 9
        ? (updatedCartItems[existingItemIndex].quantity += 1)
        : null;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    handleOpenCart();
  };

  const handleDecrease = (itemId) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item,
      );
    });
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category);

  const productUrl = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : "https://fakestoreapi.com/products";

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchData(productUrl)
      .then((response) => {
        const productsWithQuantity = response.map((product) => ({
          ...product,
          quantity: 1,
        }));
        setProducts(productsWithQuantity);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [productUrl]);

  const contextValues = {
    category,
    products,
    cartItems,
    handleOpenCart,
    handleCloseCart,
    handleAddItem,
    handleRemoveItem,
    handleDecrease,
    isCartOpen,
    error,
    loading,
    setSelectedCategory,
  };

  return (
    <ShopContext.Provider value={contextValues}>
      <ScrollToTop />
      <div>
        <NavigationBar />
        <Outlet />
        <Footer />
      </div>
    </ShopContext.Provider>
  );
}
