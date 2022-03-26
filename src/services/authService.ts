import { AxiosResponse } from 'axios';

import { Credentials, UserAuth } from '@/types';
import { api } from '@/utils';

export class AuthService {
  private static resource = '/session';

  static signIn({ email, password }: Credentials): Promise<AxiosResponse<UserAuth>> {
    return api.post(this.resource, {
      email,
      password,
    });
  }
}
