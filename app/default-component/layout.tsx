import { ReactNode } from 'react';

const layout = ({ children, aside, sidebar }: { children: ReactNode; aside: ReactNode; sidebar: ReactNode }) => {
  return (
    <div>
      <div>slot place: {aside}</div>
      <div>sidebar: {sidebar}</div>
      <div>default layout: {children}</div>
    </div>
  );
};

export default layout;
