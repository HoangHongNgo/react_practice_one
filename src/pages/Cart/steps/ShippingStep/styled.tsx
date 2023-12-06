import styled from "styled-components";
import Container from "../../../../layouts/Container";

export namespace S {
  export const ShippingStepWrapper = styled(Container)`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 118px;
  `;

  export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    width: 100%;
    max-width: 664px;
  `;

  export const AddressList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  export const AddAddressBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 132px;
  `;
}
