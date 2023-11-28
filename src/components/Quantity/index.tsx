import React from "react";
import CircleButton from "../CircleButton";
import { S } from "./styled";

interface QuantityProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const Quantity: React.FC<QuantityProps> = ({ quantity, setQuantity }) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <S.QuantityWrapper>
      <CircleButton onClick={handleDecrease}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </CircleButton>
      <S.QuantityNumber>{quantity}</S.QuantityNumber>
      <CircleButton onClick={handleIncrease}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </CircleButton>
    </S.QuantityWrapper>
  );
};

export default Quantity;
