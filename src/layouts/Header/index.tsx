import React from "react";

import Typography from "../../components/Typography";
import CircleButton from "../../components/CircleButton";
import Input from "../../components/Input";
import CartIcon from "../../assets/icons/cart.svg";
import { S } from "./styled";

import SearchIcon from "../../assets/icons/search.svg";

import { Link, useNavigate } from "react-router-dom";

interface HeaderProps {
  handleLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutEvent = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <S.StyledHeader>
      <Typography.H1>Pharmacy</Typography.H1>
      <S.RightHeader>
        <CircleButton as={Link} to="/cart" border>
          <img src={CartIcon} alt="cart" />
        </CircleButton>
        <Input icon={SearchIcon} placeholder="Enter search text"></Input>
        <S.LogoutAnchor onClick={handleLogoutEvent}>Log out</S.LogoutAnchor>
      </S.RightHeader>
    </S.StyledHeader>
  );
};

export default Header;
