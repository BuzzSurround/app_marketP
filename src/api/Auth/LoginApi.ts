import ApiCalls from '../ApiCalls';
import { EndUrls } from '../EndUrls';
import {
  RegisterResponse,
  UserDataRes,
  UserLoginResult,
  getUserDataType,
  loginType,
  registerType,
  sendOtpType,
  verifyOtpType,
} from './types';

export const loginUser: loginType = async body => {
  return ApiCalls.post<RegisterResponse>(EndUrls.LOGIN, body);
};

export const getUserData: getUserDataType = async () => {
  return ApiCalls.get<UserDataRes>(EndUrls.GET_USER_DATA);
};

export const registerUser: registerType = async body => {
  const request = {
    fullName: body.fullName,
    phone: body.phone_number,
    email: body.email,
    password: body.password,
    state: body.state,
    district: body.district,
    vdcMunicipality: body.city,
    age: body.age,
    gender: body.gender,
  };
  const result = await ApiCalls.post<RegisterResponse>(EndUrls.SIGNUP, request);
  if (result?.status === 'success') {
    return result;
  } else if (result.message) {
    throw new Error(result.message);
  } else {
    throw new Error('No Data Found');
  }
};

export const sendOtp: sendOtpType = async email => {
  return ApiCalls.post<RegisterResponse>(EndUrls.SEND_OTP, { email });
};

export const verifyOtp: verifyOtpType = async (email, otp) => {
  return ApiCalls.post<RegisterResponse>(EndUrls.VERIFY_OTP, { email, otp });
};
