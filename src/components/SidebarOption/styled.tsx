import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import Typography from "../Typography";

export interface OptionWrapperProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export namespace S {
  export const OptionWrapper = styled.button<OptionWrapperProps>`
    width: 160px;
    height: 181px;
    border-radius: 22px;
    background-color: ${({ selected, theme }) =>
      selected ? theme.colors.innerbackground : theme.colors.background};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: ${({ theme }) => theme.colors.innerbackground};
    }
  `;

  export const OptionContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  `;

  export const OptionText = styled(Typography.Text)`
    font-family: Roboto;
    font-size: ${({ theme }) => theme.fontsizes.sm};
    font-weight: ${({ theme }) => theme.fontweights.bold};
  `;
}
