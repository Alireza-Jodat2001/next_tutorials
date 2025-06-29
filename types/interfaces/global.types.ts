import { ReactNode } from 'react';

export interface RootLayoutProps {
  children: ReactNode;
}

export interface GlobalErrorsProps {
  error: Error;
  reset: () => void;
}
