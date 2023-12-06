import styled from "styled-components";

const Divider = styled.hr<{ $width: string }>`
  width: ${(props) => props.$width};
  height: 1px;
  background-color: ${({ theme }) => theme.colors.offwhite};
  border: none;
  margin: 0;
`;

export default Divider;
