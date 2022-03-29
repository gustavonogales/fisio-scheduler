import { StoreSlice, User, UserAuth } from '@/types';

export interface AuthStoreSlice {
  user?: User;
  token?: string;
  save: (auth: UserAuth) => void;
  signOut: () => void;
}

export const createAuthSlice: StoreSlice<AuthStoreSlice> = (set) => ({
  user: undefined,
  token: undefined,
  save: ({ user, token }) => set({ user, token }),
  signOut: () => set({ user: undefined, token: undefined }),
});
