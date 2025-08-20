'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [active, setActive] = useState(false);

  return (
    <Link href={'/'} prefetch={active ? null : false} onMouseEnter={() => setActive(true)}>
      Go to home
    </Link>
  );
}
