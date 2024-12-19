'use client';

import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

export const AuthProvider = ({ children }: PropsWithChildren) => (
  <SessionProvider>{children}</SessionProvider>
);
