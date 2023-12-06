import styled from "styled-components";
import Divider from "../../layouts/Divider";
import Typography from "../Typography";
import Button from "../Button";

export namespace S {
  export const OrderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 33px 21px;
    background-color: ${({ theme }) => theme.colors.innerbackground};
    border-radius: 24px;
    width: 50%;
    max-width: 335px;
  `;

  export const OrderHeader = styled(Typography.H3)`
    font-size: ${({ theme }) => theme.fontsizes.xl};
    font-weight: ${({ theme }) => theme.fontweights.bold};
    margin-bottom: 23px;
  `;

  export const OrderDivider = styled(Divider)`
    background-color: ${({ theme }) => theme.colors.text};
  `;

  export const OrderDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    margin: 41px 0 35px;
  `;

  export const OrderDetail = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  export const OrderInfo = styled(Typography.Text)`
    color: ${({ theme }) => theme.colors.textSub};
    font-size: ${({ theme }) => theme.fontsizes.xxs};
    font-weight: ${({ theme }) => theme.fontweights.bold};
  `;

  export const TotalInfo = styled(Typography.Text)`
    margin-top: 34px;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontsizes.xs};
    font-weight: ${({ theme }) => theme.fontweights.bold};
  `;

  export const OrderButton = styled(Button)`
    margin-top: 38px;
  `;
}
