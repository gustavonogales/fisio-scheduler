import React, { useEffect } from 'react';

import { useAppointments } from '@/hooks/useAppointments';

export function Home() {
  const [{ data, error, loading }] = useAppointments();

  useEffect(() => {
    console.log({ data, error, loading });
  }, [data, error, loading]);

  return <div>Home</div>;
}
