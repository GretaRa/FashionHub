import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ShopPage from "./Components/Shop/ShopPage";
import ContactUsPage from "./Components/Contact";
import ShoppingCart from "./Components/Shop/ShoppingCart";

const Router = () => {
  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/shop",
      element: <ShopPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/shop/:category",
      element: <ShopPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/contact",
      element: <ContactUsPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/shopping-cart",
      element: <ShoppingCart />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={BrowserRouter} />;
};

export default Router;