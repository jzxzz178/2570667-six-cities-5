export interface UserData {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

export type AuthData = {
  login: string;
  password: string;
};
