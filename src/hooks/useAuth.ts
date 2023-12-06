import { useState } from "react";
import { LoginResponse } from "../types/auth";
import useLocalStotage from "./useLocalStorage";

const useAuth = () => {
  const { setItem, getItem, removeItem } = useLocalStotage();

  const user = getItem<LoginResponse>("user");

  const [userState, setUserState] = useState<LoginResponse | undefined>(user);

  const login = (user: LoginResponse) => {
    setUserState(user);
    setItem("user", user);
  };

  const logout = () => {
    setUserState(undefined);
    removeItem("user");
  };

  return { userState, login, logout };
};

export default useAuth;
