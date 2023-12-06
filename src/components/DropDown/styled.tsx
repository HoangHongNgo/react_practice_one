import styled from "styled-components";

export namespace S {
  export const Select = styled.select`
    width: 335px;
    height: 64px;
    border-radius: 22px;
    background: ${({ theme }) => theme.colors.innerbackground};
    border: none;
    padding-left: 20px;

    appearance: none; /* Remove default arrow in some browsers */
    background-image: url("src/assets/icons/arrow.svg"); /* Add your custom arrow image */
    background-position: 95% 50%;
    background-repeat: no-repeat;
    cursor: pointer; /* Show pointer cursor on hover */

    font-family: Roboto;
    font-size: ${({ theme }) => theme.fontsizes.sm};
    font-weight: ${({ theme }) => theme.fontweights.regular};
  `;

  export const Option = styled.option`
    width: 335px;
    padding-left: 20px;
    border: none;

    font-family: Roboto;
    font-size: ${({ theme }) => theme.fontsizes.sm};
    font-weight: ${({ theme }) => theme.fontweights.regular};
  `;
}
