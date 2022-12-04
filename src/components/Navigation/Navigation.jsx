import { NavigationStyled, Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationStyled>
      <Link to="/" end>
        Home
      </Link>
      <Link to="/contacts">Contacts</Link>
    </NavigationStyled>
  );
};
