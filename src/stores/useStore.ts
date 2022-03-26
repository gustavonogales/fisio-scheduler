import create, { GetState, SetState } from 'zustand';
import { persist } from 'zustand/middleware';

import { StorageService } from '@/services';

import { AuthStoreSlice, createAuthSlice } from './authStore';

type StoreState = AuthStoreSlice;

export const useStore = create<StoreState>(
  persist(
    (set: SetState<any>, get: GetState<any>) => ({
      ...createAuthSlice(set, get),
    }),
    {
      name: 'auth',
      getStorage: () => StorageService.getStorage,
      partialize: (state) => ({ user: state.user, token: state.token }),
    },
  ),
);
