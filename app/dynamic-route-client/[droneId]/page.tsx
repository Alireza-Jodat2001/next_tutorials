'use client';

import { use } from 'react';

const Page = ({ params }: { params: Promise<{ droneId: string }> }) => {
  const { droneId } = use(params);
  console.log(droneId);
  return <div>ali</div>;
};

export default Page;
