'use client';

import { RootLayoutProps } from '@/types/interfaces/global.types';
import React, { useEffect, useState } from 'react';

const template = ({ children }: RootLayoutProps) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(prev => prev + 1);
  }, []);

  console.log('template', count);

  return <div>template: {children}</div>;
};

export default template;
