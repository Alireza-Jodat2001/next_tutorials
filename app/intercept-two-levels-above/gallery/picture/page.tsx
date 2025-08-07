'use client';

import Link from 'next/link';

const users = [
  { id: '1', name: 'Ali' },
  { id: '2', name: 'Sara' },
];

const page = () => {
  return (
    <>
      <div>intercept same level</div>

      {users.map((user, index) => (
        <Link key={index} href={`/intercept-two-levels-above/photo/${user.id}`} className='block'>
          {user.name}
        </Link>
      ))}
    </>
  );
};

export default page;
