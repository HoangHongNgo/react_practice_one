import React, { ButtonHTMLAttributes } from "react";
import { OptionWrapperProps } from "./styled";
import { S } from "./styled";

interface ISidebarOptionProps extends OptionWrapperProps {
  id: string;
  image: string;
  name: string;
}

const SidebarOption: React.FC<ISidebarOptionProps> = ({ id, image, name, selected, ...rest }) => {
  return (
    <S.OptionWrapper value={id} selected={selected} {...rest}>
      <S.OptionContent>
        <img src={image} alt="option image" />
        <S.OptionText>{name}</S.OptionText>
      </S.OptionContent>
    </S.OptionWrapper>
  );
};

export default SidebarOption;
