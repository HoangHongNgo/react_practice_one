import React, { useEffect, useState } from "react";
import Typography from "../../components/Typography";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { ButtonColor } from "../../utils/enums";
import { loginService } from "../../services/service";
import formValidator from "./validator/formValidator";
import { LoginResponse, User } from "../../types/auth";
import { useNavigate } from "react-router-dom";
import { S } from "./styled";

interface ILoginProps {
  handleLogin: (user: LoginResponse) => void;
  user: LoginResponse | undefined;
}

export interface LoginErrors {
  email: string | null;
  password: string | null;
}

const Login: React.FC<ILoginProps> = ({ handleLogin, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<LoginErrors>();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const handleLoginClick = async () => {
    const error = formValidator({ email, password });
    setError(error.errors);
    if (!error.isError) {
      const data = await loginService(email, password);
      if (data.user) {
        handleLogin(data);
        navigate("/");
      } else {
        setError({
          email: "Email or password was not correct",
          password: "Email or password was not correct",
        });
      }
    }
  };

  if (!user)
    return (
      <S.LoginPage>
        <S.LoginContainer>
          <Typography.H1>Login</Typography.H1>
          <S.LoginForm>
            <S.InputField>
              <Typography.Label>Email</Typography.Label>
              <Input
                type="text"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error?.email ? error.email : undefined}
              ></Input>
            </S.InputField>
            <S.InputField>
              <Typography.Label>Password</Typography.Label>
              <Input
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={error?.password ? error.password : undefined}
              ></Input>
            </S.InputField>
            <S.ButtonGroup>
              <Button onClick={handleLoginClick} type="button" $colortype={ButtonColor.Primary}>
                Login
              </Button>
              <Button type="button" $colortype={ButtonColor.Secondary}>
                Sign up
              </Button>
            </S.ButtonGroup>
          </S.LoginForm>
        </S.LoginContainer>
      </S.LoginPage>
    );
  else return <></>;
};

export default Login;
