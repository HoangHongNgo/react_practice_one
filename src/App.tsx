import React, { useState } from "react";
import useAuth from "./hooks/useAuth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Page404 from "./pages/Page404/Page404";
import Login from "./pages/Login";

const Home = React.lazy(() => import("./pages/Home"));
import ProtectedRoute from "./components/ProtectedRoute";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { ICartItem } from "./types/cart";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import { theme } from "./styles/theme";
import { useCart } from "./hooks/useCart";
import Address from "./pages/Address";

const App: React.FC = () => {
  const { userState, login, logout } = useAuth();
  const { cart, addToCart, setQuantity, removeFromCart } = useCart(userState);

  const router = createBrowserRouter([
    {
      element: (
        <ProtectedRoute user={userState}>
          <Layout handleLogout={logout} />
        </ProtectedRoute>
      ),
      // your custom routing error component
      errorElement: <Page404 />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product/:productId",
          element: <ProductDetail addToCart={addToCart} />,
        },
        {
          path: "/cart",
          element: (
            <Cart
              user={userState}
              cart={cart}
              setQuantity={setQuantity}
              removeFromCart={removeFromCart}
            />
          ),
        },
        {
          path: "address",
          element: <Address />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login handleLogin={login} user={userState} />,
    },
  ]);
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyles />
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
};

export default App;
