import { useState, useEffect } from "react";
import { CartResponse, ICartItem } from "../types/cart";
import { getCartByUserId, getProductById, updateCartById } from "../services/service";
import { LoginResponse } from "../types/auth";
import { ProductResponse } from "./../types/product";

export const useCart = (user: LoginResponse | undefined) => {
  const [cart, setCart] = useState<CartResponse>({ id: 0, userId: 0, products: [] });

  const addToCart = async (product: ProductResponse, quantity: number) => {
    const existingIndex = cart.products.findIndex((item) => item.product!.id === product.id);

    if (existingIndex !== -1) {
      const newProducts = [...cart.products];
      newProducts[existingIndex].quantity += quantity;

      const newCart = { ...cart, products: newProducts };

      setCart(newCart);
    } else {
      const newProducts = [...cart.products, { product: product, quantity: quantity }];

      const newCart = { ...cart, products: newProducts };

      setCart(newCart);
    }
  };

  const setQuantity = (productId: number, newQuantity: number) => {
    const newProducts = cart.products.map((item) => {
      if (item.product?.id === productId) {
        item.quantity = newQuantity;
      }

      return item;
    });

    const newCart = {
      ...cart,
      products: newProducts,
    };

    setCart(newCart);
  };

  const removeFromCart = (productId: number) => {
    const newProducts = cart.products.filter((item) => item.product?.id !== productId);

    const newCart = {
      ...cart,
      products: newProducts,
    };

    setCart(newCart);
  };

  useEffect(() => {
    if (user) {
      getCartByUserId(user.user.id.toString(), user.accessToken)
        .then(async (res) => {
          console.log("Get cart information successfully!");
          setCart(res[0]);
          console.log("Cart: ", cart);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  useEffect(() => {
    return () => {
      if (user && cart.id) {
        updateCartById(user.accessToken, cart, cart.id.toString())
          .then(() => {
            console.log("Cart updated successfully!");
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };
  }, [user, cart]);

  return {
    cart,
    addToCart,
    setQuantity,
    removeFromCart,
  };
};
