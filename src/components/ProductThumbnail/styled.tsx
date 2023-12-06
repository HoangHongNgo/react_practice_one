import styled from "styled-components";
import Typography from "../Typography";
import { Link } from "react-router-dom";

export namespace S {
  export const ThumbnailWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    width: 148px;
    cursor: pointer;
    img {
      border-radius: 32px;
    }
  `;

  export const ProductTitle = styled(Typography.Body)`
    line-height: 24px;
    letter-spacing: -0.011px;
    margin: 9px 0 6px;
  `;

  export const ProductPrice = styled(Typography.Body)`
    color: ${({ theme }) => theme.colors.orange};

    font-size: ${({ theme }) => theme.fontsizes.sm};
    font-weight: ${({ theme }) => theme.fontweights.bold};
    text-decoration-line: underline;
  `;
}
