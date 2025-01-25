import {LocationDetailsFormData} from '../../screens/Register/Location';
import {RegisterFormData} from '../../screens/Register/Register';

export type loginType = (userData: LoginFormData) => Promise<UserLoginResult>;
export type LoginFormData = {
  email: string;
  password: string;
};

export type getUserDataType = (id: string) => Promise<UserDataRes>;

export type UserDataRes = {
  data: UserData;
  message?: string;
  errors?: any;
};

export interface UserData {
  _id: string;
  email: string;
  mobile: string;
  password: string;
  name: string;
  profilePic: string;
  __v: number;
}

export interface UserLoginResult {
  userID: string;
  token: string;
  data?: UserData;
  errors?: string;
}

export type forgotPasswordType = (email: string) => Promise<any>;

export type resetPasswordType = (password: string) => Promise<any>;

export type registerType = (
  userData: RegisterFormData & LocationDetailsFormData,
) => Promise<UserData | undefined>;
