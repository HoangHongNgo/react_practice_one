import styled from "styled-components";
import Container from "../../layouts/Container";
import Input from "../../components/Input";
import Button from "../../components/Button";

export namespace S {
  export const AddressWrapper = styled(Container)`
    padding-top: 30px;
  `;
  export const LineOfInput = styled.div``;

  export const AddressForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 53px;
    margin-top: 65px;
  `;

  export const InputLine = styled.div`
    display: flex;
    gap: 51px;
  `;

  export const InputField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `;

  export const DropdownField = styled.div`
    padding-top: 37px;
  `;

  export const ButtonGroup = styled.div`
    margin-top: 50px;
    display: flex;
    gap: 33px;
  `;
}
