'use client';

import { useLinkStatus } from 'next/link';

const LoadingIndicator = () => {
  const { pending } = useLinkStatus();

  return pending ? <div className='w-4 h-4 border border-red-50 border-t-red-500 animate-spin rounded-full' /> : null;
};

export default LoadingIndicator;
