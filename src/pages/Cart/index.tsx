import React, { useState, useMemo } from "react";
import { LoginResponse } from "../../types/auth";
import { CartResponse } from "../../types/cart";
import CartStep from "./steps/CartStep";
import ShippingStep from "./steps/ShippingStep";
import NotificationStep from "./steps/NotificationStep";

interface CartProps {
  user: LoginResponse | undefined;
  cart: CartResponse;
  setQuantity: (productId: number, newQuantity: number) => void;
  removeFromCart: (productId: number) => void;
}

const Cart: React.FC<CartProps> = ({ user, cart, setQuantity, removeFromCart }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const orderValue = useMemo(() => {
    if (!cart.products) {
      return 0; // or whatever default value makes sense for your use case
    }

    return cart.products.reduce((acc, item) => {
      if (item.product) return acc + item.product.price * item.quantity;
      return acc;
    }, 0);
  }, [cart.products]);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const getStepComponent = (step: number) => {
    if (!user) return <></>;

    switch (step) {
      case 1:
        return (
          <CartStep
            cart={cart}
            setQuantity={setQuantity}
            removeFromCart={removeFromCart}
            orderValue={orderValue}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <ShippingStep
            user={user}
            cart={cart}
            prevStep={prevStep}
            nextStep={nextStep}
            orderValue={orderValue}
          />
        );
      case 3:
        return <NotificationStep />;
      default:
        return <></>;
    }
  };

  return <>{getStepComponent(currentStep)}</>;
};

export default Cart;
