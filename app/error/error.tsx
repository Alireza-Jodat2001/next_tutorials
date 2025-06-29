'use client';

import { useCallback, useEffect } from 'react';
import { GlobalErrorsProps } from '@/types/interfaces/global.types';

export default function Error({ error, reset }: GlobalErrorsProps) {
  const onResetButtonClicked = useCallback(() => reset(), [reset]);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      An error has occurred (nested).
      <button onClick={onResetButtonClicked}>Reset</button>
    </div>
  );
}
