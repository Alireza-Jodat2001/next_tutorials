import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      id: <Link href='/test-template-2/2'>goto</Link>
    </div>
  );
};

export default page;
