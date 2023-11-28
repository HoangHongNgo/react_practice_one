import styled from "styled-components";

interface CircleButtonProps {
  border?: boolean;
}

const CircleButton = styled.button<CircleButtonProps>`
  width: 48px;
  height: 48px;
  border: ${({ border, theme }) => (border ? "2px solid" + theme.colors.gray : "none")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ border, theme }) =>
    border ? theme.colors.background : theme.colors.innerbackground};
  cursor: pointer;
`;

export default CircleButton;
