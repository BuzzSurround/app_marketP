import { create } from 'zustand';
import { UserData } from '../api/Auth/types';

export type UserState = {
  token: string | null;
  userData: UserData | null;
  loading: boolean;
  userId: string | null;
};

export type UserAction = {
  setUserState: (state: Partial<UserState>) => void;
};

const initialState: UserState = {
  token: null,
  userData: null,
  loading: false,
  userId: null,
};

export const useUserStore = create<UserState & UserAction>(set => {
  return {
    ...initialState,
    setUserState: state => set(state),
  };
});
