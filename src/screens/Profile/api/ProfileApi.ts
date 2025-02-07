import ApiCalls from "../../../api/ApiCalls";
import { EndUrls } from "../../../api/EndUrls";
import { getUserDataType, UserDataRes } from "./types";

export const getUserData: getUserDataType = async () => {
    return ApiCalls.get<UserDataRes>(EndUrls.GET_USER_DATA);
};

export const updateUserData: Partial<getUserDataType> = async () => {
    return ApiCalls.get<UserDataRes>(EndUrls.UPDATE_USER_DATA);
};

export const updateUserNeighbourhood: Partial<getUserDataType> = async () => {
    return ApiCalls.get<UserDataRes>(EndUrls.UPDATE_USER_NEIGHBOURHOOD);
};