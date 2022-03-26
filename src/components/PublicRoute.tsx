import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/constants';
import { useStore } from '@/stores';

export const PublicRoute: React.FC = ({ children }) => {
  const user = useStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(ROUTES.HOME);
    }
  }, []);

  return <>{children}</>;
};
