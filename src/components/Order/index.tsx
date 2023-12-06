import React, { useMemo } from "react";
import { S } from "./styled";
import { ButtonColor } from "../../utils/enums";

interface OrderProps {
  order: number;
  discount: number;
  shipping: number;
  total: number;
  checkoutFnc: () => void;
}

const Order: React.FC<OrderProps> = ({ order, discount, shipping, total, checkoutFnc }) => {
  return (
    <S.OrderWrapper>
      <S.OrderHeader>Order</S.OrderHeader>
      <S.OrderDivider $width="100%" />
      <S.OrderDetails>
        <S.OrderDetail>
          <S.OrderInfo>Your order</S.OrderInfo>
          <S.OrderInfo>${order}</S.OrderInfo>
        </S.OrderDetail>
        <S.OrderDetail>
          <S.OrderInfo>Discount</S.OrderInfo>
          <S.OrderInfo>${discount}</S.OrderInfo>
        </S.OrderDetail>
        <S.OrderDetail>
          <S.OrderInfo>Shipping fee</S.OrderInfo>
          <S.OrderInfo>${shipping}</S.OrderInfo>
        </S.OrderDetail>
      </S.OrderDetails>
      <S.OrderDivider $width="100%" />
      <S.OrderDetail>
        <S.TotalInfo>Total</S.TotalInfo>
        <S.TotalInfo>${total}</S.TotalInfo>
      </S.OrderDetail>
      <S.OrderButton
        $colortype={ButtonColor.Primary}
        $width="288px"
        $height="56px"
        onClick={checkoutFnc}
      >
        Checkout
      </S.OrderButton>
    </S.OrderWrapper>
  );
};

export default Order;
