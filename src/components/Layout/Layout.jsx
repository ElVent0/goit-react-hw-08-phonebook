import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { TopNavigation } from '../TopNavigation/TopNavigation';
import { LayoutStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutStyled>
      <TopNavigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutStyled>
  );
};
