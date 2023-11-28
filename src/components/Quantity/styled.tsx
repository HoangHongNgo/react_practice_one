import styled from "styled-components";
import Typography from "../Typography";

export namespace S {
  export const QuantityWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 37px;
  `;

  export const QuantityNumber = styled(Typography.Text)`
    font-size: ${({ theme }) => theme.fontsizes.lg};
    font-weight: ${({ theme }) => theme.fontweights.regular};
  `;
}
