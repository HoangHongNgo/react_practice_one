import styled from "styled-components";
import Typography from "../../components/Typography";

export namespace S {
  export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 44px 70px 34px;
  `;

  export const RightHeader = styled.header`
    display: flex;
    align-items: center;
    gap: 26px;
  `;

  export const LogoutAnchor = styled(Typography.A)`
    color: ${({ theme }) => theme.colors.gray};
    font-family: Roboto;
    font-size: ${({ theme }) => theme.fontsizes.xxs};
    font-weight: ${({ theme }) => theme.fontweights.regular};
  `;
}
