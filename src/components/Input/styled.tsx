import styled from "styled-components";

export namespace S {
  export const InputWrapper = styled.div`
    position: relative;
    display: inline-block;
    p {
      margin-top: 10px;
      height: 12px;
      font-family: Roboto;
      font-size: ${({ theme }) => theme.fontsizes.xxs};
      font-weight: ${({ theme }) => theme.fontweights.bold};
      color: ${({ theme }) => theme.colors.danger};
    }
  `;

  export const StyledInput = styled.input<{ $icon?: boolean }>`
    padding-left: ${({ $icon }) => ($icon ? "70px" : "20px")};
    width: 335px;
    height: 64px;
    border-radius: 22px;
    background: ${({ theme }) => theme.colors.innerbackground};
    border: none;

    font-family: Roboto;
    font-size: ${({ theme }) => theme.fontsizes.sm};
    font-weight: ${({ theme }) => theme.fontweights.regular};
  `;

  export const Icon = styled.img`
    position: absolute;
    top: 50%;
    left: 22px;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
  `;
}
