'use client';

import { use } from 'react';

interface Props {
  params: Promise<{
    parameters?: string[];
  }>;
}

const page = ({ params }: Props) => {
  const { parameters } = use(params);

  console.log(parameters);

  return <div>catch all route</div>;
};

export default page;
