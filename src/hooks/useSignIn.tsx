import useAxios from 'axios-hooks';

export function useSignIn() {
  return useAxios({ url: '/auth', method: 'POST' }, { manual: true });
}
