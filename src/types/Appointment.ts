import { User } from './User';

export interface Appointment {
  id: string;
  startTime: Date;
  endTime: Date;
  createdAt: Date;
  updatedAt: Date;
  clientId: string;
  professionalId: string;
  client?: User;
}
