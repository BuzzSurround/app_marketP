import { LocationDetailsFormData } from '../../screens/Register/Location';
import { RegisterFormData } from '../../screens/Register/Register';

export type loginType = (userData: LoginFormData) => Promise<RegisterResponse>;
export type LoginFormData = {
  email: string;
  password: string;
};

export type getUserDataType = () => Promise<UserDataRes>;

export type UserDataRes = {
  data: UserData;
  message?: string;
  errors?: any;
};

export interface UserData {
  Age: number;
  District: string;
  Downvotes: number;
  Gender: string;
  State: string;
  Upvotes: number;
  VdcMunicipality: string;
  WardNo: number;
  bio: string;
  coverPictureUrl: string;
  email: string;
  fullName: string;
  neighbourhoodDetails: any;
  phone: string;
  profilePictureUrl: string;
  userName: string;
}

export interface UserLoginResult {
  data: UserData;
  message: string;
  status: string;
}

export interface LoginData {
  access_token: string;
  refresh_token: string;
}

export interface RegisterResponse {
  data: LoginData | null;
  message: string;
  status: string;
}

export type forgotPasswordType = (email: string) => Promise<any>;

export type resetPasswordType = (password: string) => Promise<any>;

export type registerType = (
  userData: RegisterFormData & LocationDetailsFormData,
) => Promise<RegisterResponse | undefined>;

export type sendOtpType = (
  email: string,
) => Promise<RegisterResponse | undefined>;

export type verifyOtpType = (
  email: string,
  otp: string,
) => Promise<RegisterResponse | undefined>;
