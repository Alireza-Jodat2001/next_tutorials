'use client';

import Link from 'next/link';
import LoadingIndicator from '@/components/LoadingIndicator';

const Page = () => {
  return (
    <div>
      useLinkStatus: <br />
      <Link href='/' prefetch={false} className='bg-sky-200 text-black inline-flex items-center gap-2'>
        <LoadingIndicator />
        Click me to show loading on link
      </Link>
    </div>
  );
};

export default Page;
