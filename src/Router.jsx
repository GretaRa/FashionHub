import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ShopPage2 from "./Components/Shop/ShopPage2.jsx";
import ContactUsPage from "./Components/Contact";

const Router = () => {
  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/shop",
      element: <ShopPage2 />,
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