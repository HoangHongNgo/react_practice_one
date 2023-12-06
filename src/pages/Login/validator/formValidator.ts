import { LoginErrors } from "..";

interface Error {
  isError: boolean;
  errors: LoginErrors;
}

const formValidator = (formData: { email: string; password: string }): Error => {
  const error: Error = {
    isError: false,
    errors: { email: null, password: null },
  };

  if (!formData.email) {
    error.errors.email = "Email is required";
    error.isError = true;
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    error.errors.email = "Invalid email address";
    error.isError = true;
  }

  if (!formData.password) {
    error.errors.password = "Password is required";
    error.isError = true;
  } else if (formData.password.length < 5) {
    error.errors.password = "Password must be at least 5 characters long";
    error.isError = true;
  }

  return error;
};

export default formValidator;
