'use client';

import { RootLayoutProps } from '@/types/interfaces/global.types';
import React, { useEffect } from 'react';

const template = ({ children }: RootLayoutProps) => {
  useEffect(() => {
    console.log('render');
  }, []);

  return <div>{children}</div>;
};

export default template;
