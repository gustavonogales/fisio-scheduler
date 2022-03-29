import useAxios from 'axios-hooks';

export interface AppointmentParams {
  expand?: boolean;
  startTime?: Date;
  endTime?: Date;
}

export function useAppointments({ expand, startTime, endTime }: AppointmentParams = {}) {
  return useAxios({
    url: '/appointment',
    params: {
      ...(expand ? { expand } : {}),
      ...(startTime ? { startTime } : {}),
      ...(endTime ? { endTime } : {}),
    },
  });
}
