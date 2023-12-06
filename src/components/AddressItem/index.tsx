import React from "react";
import { AddressResponse } from "../../types/cart";
import { S } from "./styled";

interface AddressItemProps {
  address: AddressResponse;
  checked: boolean;
  setSelectedAddress: React.Dispatch<React.SetStateAction<AddressResponse | undefined>>;
}

const AddressItem: React.FC<AddressItemProps> = ({ address, checked, setSelectedAddress }) => {
  const handleSelectedAddress = () => {
    setSelectedAddress(address);
  };

  return (
    <S.AddressItemWrapper>
      <S.AddressLabel>
        <S.AddressName>{address.name}</S.AddressName>
        <S.Address>
          <S.AddressInfo>{address.phone}</S.AddressInfo>
          <S.AddressInfo>
            {address.address}, {address.district}, {address.city}, Vietnam
          </S.AddressInfo>
        </S.Address>
      </S.AddressLabel>
      <S.RadioBtn
        type="radio"
        value={address.id}
        checked={checked}
        onChange={handleSelectedAddress}
      />
    </S.AddressItemWrapper>
  );
};

export default AddressItem;
