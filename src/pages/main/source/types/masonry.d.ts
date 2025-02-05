declare module 'react-responsive-masonry' {
  import { ComponentType, ReactNode } from 'react';

  export interface ResponsiveMasonryProps {
    columnsCountBreakPoints?: { [key: number]: number };
    children: ReactNode;
  }

  export interface MasonryProps {
    children: ReactNode;
    gutter?: string | number;
  }

  export const ResponsiveMasonry: ComponentType<ResponsiveMasonryProps>;
  const Masonry: ComponentType<MasonryProps>;
  export default Masonry;
}
