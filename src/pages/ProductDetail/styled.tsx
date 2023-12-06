import { Link } from "react-router-dom";
import styled from "styled-components";
import Typography from "../../components/Typography";
import Container from "../../layouts/Container";

export namespace S {
  export const DetailWrapper = styled(Container)`
    display: flex;
    gap: 40px;
    padding: 40px 223px 0;
  `;

  export const LeftWrapper = styled.div``;

  export const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

  export const TopInfo = styled.div`
    display: flex;
    padding-left: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
  `;

  export const ProductTitle = styled(Typography.H2)``;

  export const ProductPrice = styled(Typography.Text)`
    font-size: ${({ theme }) => theme.fontsizes.xl};
    font-weight: ${({ theme }) => theme.fontweights.regular};
    color: ${({ theme }) => theme.colors.orange};
    text-decoration: underline;
  `;

  export const QuantityWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 26px 0 47px;
  `;

  export const QuantityInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 68px;
  `;

  export const ButtonGroup = styled.div`
    display: flex;
    width: 100%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  `;

  export const LightButton = styled.button`
    width: 50%;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.background};
  `;

  export const GreenButton = styled(Link)`
    width: 50%;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  export const DetailInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 47px;
    margin-left: 10px;
  `;

  export const DetailInfo = styled(Typography.Body)`
    color: ${({ theme }) => theme.colors.textSub};
  `;
}
