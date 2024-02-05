import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ShopPage from "./Components/Shop/ShopPage";
import ContactUsPage from "./Components/ContactPage/Contact";
import CartDisplay from "./Components/Cart/CartDisplay";
import HomePage from "./Components/HomePage/HomePage";

const Router = () => {
  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "/shop",
          element: <ShopPage />,
        },
        {
          path: "/shop/:category",
          element: <ShopPage />,
        },
        {
          path: "/contact",
          element: <ContactUsPage />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={BrowserRouter}>
      <CartDisplay />
    </RouterProvider>
  );
};

export default Router;
