import React, { useEffect, useMemo, useState } from "react";
import { S } from "./styled";
import Typography from "../../../../components/Typography";
import { AddressResponse, CartResponse } from "../../../../types/cart";
import { LoginResponse, User } from "../../../../types/auth";
import { addOrder, getAddressByUserId } from "../../../../services/service";
import AddressItem from "./../../../../components/AddressItem/index";
import Order from "../../../../components/Order";
import Button from "../../../../components/Button";
import { ButtonColor } from "../../../../utils/enums";
import PlusIcon from "../../../../assets/icons/plus.svg";
import CircleButton from "../../../../components/CircleButton";
import { useNavigate } from "react-router-dom";
import { OrderBody } from "./../../../../types/cart";

interface ShippingStepProps {
  user: LoginResponse;
  prevStep: () => void;
  nextStep: () => void;
  cart: CartResponse;
  orderValue: number;
}

const ShippingStep: React.FC<ShippingStepProps> = ({
  user,
  prevStep,
  nextStep,
  cart,
  orderValue,
}) => {
  const [addressList, setAddessList] = useState<AddressResponse[]>();
  const [selectedAddress, setSelectedAddress] = useState<AddressResponse>();
  const total = useMemo(() => orderValue + (selectedAddress?.fee ?? 0), [selectedAddress?.fee]);

  const navigate = useNavigate();

  useEffect(() => {
    getAddressByUserId(user.user.id.toString(), user.accessToken)
      .then((res) => {
        setAddessList(res);
        setSelectedAddress(res[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const checkoutFnc = async () => {
    if (selectedAddress) {
      // try {
      //   await addOrder(user.user.id, selectedAddress, cart.products, orderValue, user.accessToken);
      //   nextStep();
      // } catch (err) {
      //   console.error(err);
      // }

      const order: OrderBody = {
        userId: user.user.id,
        address: selectedAddress,
        products: cart.products,
        shipping: selectedAddress.fee,
        total: total,
      };
      addOrder(order, user.accessToken)
        .then((res) => {
          nextStep();
        })
        .catch((err) => {});
    }
  };

  const AddAddressHandle = () => {
    navigate("/address");
  };

  return (
    <S.ShippingStepWrapper>
      <S.LeftContent>
        <Typography.H2>Shipping</Typography.H2>
        <S.AddressList>
          {addressList?.map((item) => {
            return (
              <AddressItem
                address={item}
                checked={item.id === selectedAddress?.id ?? false}
                setSelectedAddress={setSelectedAddress}
              />
            );
          })}
          <S.AddAddressBtn onClick={AddAddressHandle}>
            <CircleButton>
              <img src={PlusIcon} alt="Add Address"></img>
            </CircleButton>
          </S.AddAddressBtn>
        </S.AddressList>
        <Button $width="335px" $height="55px" $colortype={ButtonColor.Tertiary} onClick={prevStep}>
          Go back
        </Button>
      </S.LeftContent>
      <Order
        order={orderValue}
        discount={0}
        shipping={selectedAddress?.fee ?? 0}
        total={orderValue + (selectedAddress?.fee ?? 0)}
        checkoutFnc={checkoutFnc}
      />
    </S.ShippingStepWrapper>
  );
};

export default ShippingStep;
