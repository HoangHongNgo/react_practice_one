import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Page404 from "./pages/Page404/Page404";
import Login from "./pages/Login/Login";

const Home = React.lazy(() => import("./pages/Home/Home"));

const App = (): JSX.Element => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      // your custom routing error component
      errorElement: <Page404 />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
