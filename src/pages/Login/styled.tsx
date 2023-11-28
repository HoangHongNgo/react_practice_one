import styled from "styled-components";

export namespace S {
  export const LoginPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto auto;
    width: 335px;
    gap: 44px;
  `;

  export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 42px;
  `;

  export const InputField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `;

  export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 21px;
  `;
}
