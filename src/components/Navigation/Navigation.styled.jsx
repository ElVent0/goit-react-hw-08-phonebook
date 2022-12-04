import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationStyled = styled.nav`
  display: flex;
  gap: 40px;
`;
export const Link = styled(NavLink)`
  font-weight: 500;
  font-size: 24px;
  text-decoration: none;
  color: #fff;
  &:hover,
  &.active {
    opacity: 0.8;
  }
`;
