import { UserType } from './UserType';

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  type: UserType;
}
