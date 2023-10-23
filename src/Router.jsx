import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ShopPage from "./Components/Shop/ShopPage.jsx";
import ContactUsPage from "./Components/Contact";

const Router = () => {
  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/shop/:categoryName",
      element: <ShopPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/contact",
      element: <ContactUsPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={BrowserRouter} />;
};

export default Router;