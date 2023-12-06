import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { S } from "./styled";
import Typography from "../../components/Typography";
import Input from "../../components/Input";
import { AddressForm, CityResponse, District } from "../../types/cart";
import Dropdown from "../../components/DropDown";
import PhoneIcon from "../../assets/icons/Phone.svg";
import LocationIcon from "../../assets/icons/Location.svg";
import { addAddress, getCities } from "../../services/service";
import Button from "../../components/Button";
import { ButtonColor } from "../../utils/enums";
import { LoginResponse } from "../../types/auth";

interface AddressProps {
  user: LoginResponse;
  addressId?: number;
}

const Address: React.FC<AddressProps> = ({ user }) => {
  const { addressId } = useParams();

  const [addressData, setAddressData] = useState<AddressForm>({
    id: addressId ? parseInt(addressId, 10) : undefined,
    userId: user.user.id,
    name: "",
    phone: "",
    address: "",
    district: "",
    city: "",
    fee: 0,
  });

  const [cityList, setCityList] = useState<CityResponse[]>();
  const [districtList, setDistrictList] = useState<District[]>();

  useEffect(() => {
    getCities()
      .then((res) => {
        setCityList(res);
        setAddressData({
          ...addressData,
          city: res[0].name,
          district: res[0].districts[0].name,
          fee: res[0].districts[0].fee,
        });
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    const districts = cityList?.find((item) => item.name === addressData.city)?.districts;
    setDistrictList(districts);
  }, [addressData.city]);

  useEffect(() => {
    setAddressData({
      ...addressData,
      fee:
        cityList
          ?.find((item) => item.name === addressData.city)
          ?.districts.find((item) => item.name === addressData.district)?.fee ?? 0,
    });
  }, [addressData.district]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAddressData((prevData) => ({ ...prevData, [name]: value }));
    console.log(addressData);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    addAddress(user.accessToken, addressData);
  };

  return (
    <S.AddressWrapper>
      <Typography.H2>Shipping Information</Typography.H2>
      <S.AddressForm>
        <S.InputLine>
          <S.InputField>
            <Typography.Label>Full name</Typography.Label>
            <Input
              type="text"
              placeholder="Your name"
              name="name"
              value={addressData.name}
              error={undefined}
              onChange={handleChange}
            ></Input>
          </S.InputField>
          <S.InputField>
            <Typography.Label>Phone number</Typography.Label>
            <Input
              type="text"
              placeholder="Your phone number"
              name="phone"
              value={addressData.phone}
              error={undefined}
              icon={PhoneIcon}
              onChange={handleChange}
            ></Input>
          </S.InputField>
        </S.InputLine>
        <S.InputLine>
          <S.InputField>
            <Typography.Label>Address</Typography.Label>
            <Input
              type="text"
              placeholder="Address"
              name="address"
              value={addressData.address}
              error={undefined}
              icon={LocationIcon}
              onChange={handleChange}
            ></Input>
          </S.InputField>
          <S.DropdownField>
            <Dropdown
              name="city"
              options={cityList ? cityList.map((item) => item.name) : [""]}
              onSelect={handleChange}
            />
          </S.DropdownField>
          <S.DropdownField>
            <Dropdown
              name="district"
              options={districtList ? districtList.map((item) => item.name) : [""]}
              onSelect={handleChange}
            />
          </S.DropdownField>
        </S.InputLine>
        <S.ButtonGroup>
          <Button
            type="submit"
            $colortype={ButtonColor.Primary}
            $width="216px"
            $height="72px"
            onClick={handleSave}
          >
            Save
          </Button>
          <Button type="button" $colortype={ButtonColor.Tertiary} $width="216px" $height="72px">
            Cancel
          </Button>
        </S.ButtonGroup>
      </S.AddressForm>
    </S.AddressWrapper>
  );
};

export default Address;
