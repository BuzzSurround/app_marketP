import ApiCalls from '../ApiCalls';
import {EndUrls} from '../EndUrls';
import {
  UserDataRes,
  UserLoginResult,
  getUserDataType,
  loginType,
  registerType,
} from './types';

export const loginUser: loginType = async body => {
  return ApiCalls.post<UserLoginResult>(EndUrls.LOGIN, body);
};

export const getUserData: getUserDataType = async id => {
  return ApiCalls.get<UserDataRes>(EndUrls.GET_USER_DATA + 'id=' + id);
};

export const registerUser: registerType = async body => {
  const result = await ApiCalls.post<UserDataRes>(EndUrls.SIGNUP, body);
  if (result?.data) {
    return result?.data;
  } else if (result.errors) {
    throw new Error('Something went wrong');
  } else if (result.message) {
    throw new Error(result.message);
  } else {
    throw new Error('No Data Found');
  }
};
