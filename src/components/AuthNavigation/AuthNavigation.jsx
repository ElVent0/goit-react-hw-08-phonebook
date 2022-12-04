import { Link } from 'components/Navigation/Navigation.styled';

import { Links } from './AuthNavigation.styled';

export const AuthNav = () => {
  return (
    <Links>
      <Link to="/register">Sign up</Link>
      <Link to="/login">Log In</Link>
    </Links>
  );
};
