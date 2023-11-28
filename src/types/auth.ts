export interface User {
  email: string;
  id: number;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}
