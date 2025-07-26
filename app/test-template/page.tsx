'use client';

import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      test template <Link href='/test-template/nested'>go to nested</Link>
    </div>
  );
};

export default page;
