import React, { ReactNode } from 'react';

const layout = ({ sidebar, header, children }: { sidebar: ReactNode; header: ReactNode; children: ReactNode }) => {
  return (
    <div className='flex flex-col'>
      {sidebar} {header} {children}
    </div>
  );
};

export default layout;
