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