import { InputHTMLAttributes } from "react";
import { S } from "./styled";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  error?: string;
}

const Input: React.FC<IInputProps> = ({ icon, error, ...inputProps }) => {
  return (
    <S.InputWrapper>
      {icon ? <S.Icon src={icon} alt="input icon"></S.Icon> : ""}
      <S.StyledInput $icon={true} {...inputProps} />
      {error ? <p>{error}</p> : ""}
    </S.InputWrapper>
  );
};

export default Input;
