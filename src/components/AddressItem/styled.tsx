import styled from "styled-components";
import Typography from "../Typography";

export namespace S {
  export const AddressItemWrapper = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 132px;
  `;

  export const AddressLabel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 19px;
  `;

  export const AddressName = styled(Typography.H3)`
    font-size: ${({ theme }) => theme.fontsizes.xl};
    letter-spacing: normal;
  `;

  export const Address = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
  `;

  export const AddressInfo = styled(Typography.Text)`
    font-size: ${({ theme }) => theme.fontsizes.sm};
    font-weight: ${({ theme }) => theme.fontweights.regular};
    color: ${({ theme }) => theme.colors.textSub};
  `;

  export const RadioBtn = styled.input`
    width: 32px;
    height: 32px;
  `;
}
