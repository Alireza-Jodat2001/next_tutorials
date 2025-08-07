'use client';

import { useRouter } from 'next/navigation';
import { use } from 'react';

const page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const { back } = useRouter();

  return (
    <div key={id} className='absolute top-1/2 left-1/2 -translate-1/2 bg-red-300 fade-in'>
      (.)[id]: {id}
      <button onClick={() => back()}>close</button>
    </div>
  );
};

export default page;
