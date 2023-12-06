import React from "react";
import { S } from "./styled";
import Typography from "../../../../components/Typography";
import Order from "../../../../components/Order";
import CartItem from "../../../../components/CartItem";
import Divider from "../../../../layouts/Divider";
import { CartResponse } from "./../../../../types/cart";

interface CartStepProps {
  cart: CartResponse;
  setQuantity: (productId: number, newQuantity: number) => void;
  removeFromCart: (productId: number) => void;
  orderValue: number;
  nextStep: () => void;
}

const CartStep: React.FC<CartStepProps> = ({
  cart,
  setQuantity,
  removeFromCart,
  orderValue,
  nextStep,
}) => {
  console.log("cart at CartStep: ", cart);
  return (
    <S.CartPageWrapper>
      <S.LeftContent>
        <Typography.H2>Cart</Typography.H2>
        <S.CartList>
          {cart.products?.map((item) => {
            if (item.product)
              return (
                <div>
                  <CartItem
                    product={item.product}
                    quantity={item.quantity}
                    setQuantity={setQuantity}
                    removeFromCart={removeFromCart}
                  />
                  {cart.products.indexOf(item) !== cart.products.length - 1 ? (
                    <Divider $width="100%" />
                  ) : (
                    ""
                  )}
                </div>
              );
          })}
        </S.CartList>
      </S.LeftContent>
      <Order
        order={orderValue}
        discount={0}
        shipping={0}
        total={orderValue}
        checkoutFnc={nextStep}
      />
    </S.CartPageWrapper>
  );
};

export default CartStep;
