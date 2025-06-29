import { RootLayoutProps } from '@/types/interfaces/global.types';

const layout = ({ children }: RootLayoutProps) => {
  return (
    <div>
      Error layout
      {children}
    </div>
  );
};

export default layout;
