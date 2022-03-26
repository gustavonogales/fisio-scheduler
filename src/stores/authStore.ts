import { AuthService } from '@/services';
import { Credentials, StoreSlice, User } from '@/types';

export interface AuthStoreSlice {
  user?: User;
  token?: string;
  signIn: (credentials: Credentials) => Promise<void>;
  signOut: () => void;
}

export const createAuthSlice: StoreSlice<AuthStoreSlice> = (set) => ({
  user: undefined,
  token: undefined,
  signIn: async ({ email, password }) => {
    const response = await AuthService.signIn({ email, password });
    const { user, token } = response.data;
    set({ user, token });
  },
  signOut: () => set({ user: undefined }),
});
