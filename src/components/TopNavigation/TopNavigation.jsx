import { AuthNav } from 'components/AuthNavigation/AuthNavigation';
import { Navigation } from 'components/Navigation/Navigation';
import { Menu } from 'components/Menu/Menu';
import { Header } from './TopNavigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../Redux/auth/authSelectors';

export const TopNavigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <Menu /> : <AuthNav />}
    </Header>
  );
};
