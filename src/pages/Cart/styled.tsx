import styled from "styled-components";
import Container from "../../layouts/Container";

export namespace S {
  export const CartPageWrapper = styled(Container)`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 118px;
  `;

  export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 34px;
    width: 100%;
    max-width: 664px;
  `;

  export const CartList = styled.div`
    display: flex;
    flex-direction: column;
  `;
}
