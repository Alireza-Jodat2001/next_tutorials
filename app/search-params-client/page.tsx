// 1)
// 'use client';

// import { use } from 'react';

// const page = ({ searchParams }: { searchParams: Promise<any> }) => {
//   const { id } = use(searchParams);

//   return <div>{id}</div>;
// };

// export default page;

// 2)
// 'use client';

// import { useSearchParams } from 'next/navigation';

// const page = () => {
//   const searchParams = useSearchParams();
//   const id = searchParams.get('id');

//   return <div>{id}</div>;
// };

// export default page;

// 3)
'use client';

const page = () => {
  return (
    <button
      onClick={() => {
        const createdUrlSearchParams = new URLSearchParams(window.location.search);
        console.log(createdUrlSearchParams.get('id'));
      }}
    >
      click
    </button>
  );
};

export default page;
