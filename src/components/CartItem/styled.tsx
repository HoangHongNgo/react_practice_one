import styled from "styled-components";
import Typography from "../Typography";

export namespace S {
  export const CartItemWrapper = styled.div`
    margin: 17px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 136px;
  `;

  export const ProductInfo = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
  `;

  export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 156px;
    gap: 12px;
  `;

  export const RightWrapper = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
    height: 100%;
    img {
      align-self: flex-start;
    }
  `;

  export const ProductPrice = styled(Typography.Text)`
    font-size: ${({ theme }) => theme.fontsizes.xl};
    font-weight: ${({ theme }) => theme.fontweights.regular};
    color: ${({ theme }) => theme.colors.orange};
    text-decoration: underline;
  `;
}
