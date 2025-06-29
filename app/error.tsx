'use client';

import { useCallback, useEffect } from 'react';
import { GlobalErrorsProps } from '@/types/interfaces/global.types';

export default function GlobalError({ error, reset }: GlobalErrorsProps) {
  const onResetButtonClicked = useCallback(() => reset(), [reset]);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      An error has occurred (global).
      <button onClick={onResetButtonClicked}>Reset</button>
    </div>
  );
}
