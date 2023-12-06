import React from "react";
import { ProductResponse } from "../../types/product";
import Typography from "../Typography";
import Quantity from "../Quantity";
import XMark from "../../assets/icons/xmark.svg";
import { S } from "./styled";

interface CartItemProps {
  product: ProductResponse;
  quantity: number;
  setQuantity: (productId: number, value: number) => void;
  removeFromCart: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity, setQuantity, removeFromCart }) => {
  const setQuantityProduct = (value: number) => {
    setQuantity(product.id, value);
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <S.CartItemWrapper>
      <S.ProductInfo>
        <img src={product.preview} alt={product.name} width="136px" height="136px" />
        <S.InfoWrapper>
          <Typography.Body>{product.name}</Typography.Body>
          <S.ProductPrice>${product.price}</S.ProductPrice>
        </S.InfoWrapper>
      </S.ProductInfo>
      <S.RightWrapper>
        <Quantity quantity={quantity} setQuantity={setQuantityProduct} />
        <img onClick={handleRemove} src={XMark} alt="delete" width="13px" height="13px" />
      </S.RightWrapper>
    </S.CartItemWrapper>
  );
};

export default CartItem;
