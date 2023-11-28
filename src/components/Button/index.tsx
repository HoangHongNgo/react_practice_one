import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { ButtonColor } from "../../utils/enums";

interface ButtonProps {
  $width?: string;
  $height?: string;
  $colortype?: ButtonColor;
}

const Button = styled.button<ButtonProps>`
  width: ${({ $width }) => $width || "335px"};
  height: ${({ $height }) => $height || "72px"};
  background-color: ${({ $colortype, theme }) =>
    $colortype === ButtonColor.Primary
      ? theme.colors.primary
      : $colortype === ButtonColor.Secondary
      ? theme.colors.secondary
      : theme.colors.innerbackground};
  border-radius: 24px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Roboto;
  font-size: ${({ theme }) => theme.fontsizes.base};
  font-weight: ${({ theme }) => theme.fontweights.regular};
  line-height: 26px;
  letter-spacing: -0.013px;

  &:hover {
    background-color: ${({ $colortype, theme }) =>
      $colortype === ButtonColor.Primary
        ? theme.colors.primarySub
        : $colortype === ButtonColor.Secondary
        ? theme.colors.secondarySub
        : theme.colors.textSub};
  }
`;

export default Button;
