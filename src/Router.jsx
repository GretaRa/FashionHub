import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ShopPage from "./Components/Shop/ShopPage.jsx";


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
  ]);

  return <RouterProvider router={BrowserRouter} />;
};

export default Router;