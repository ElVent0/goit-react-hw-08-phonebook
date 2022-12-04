import { UserMenuLinks, User, Button } from './Menu.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'Redux/auth/authSelectors';
import { logOut } from '../../Redux/auth/authOperations';
export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <UserMenuLinks>
      <User>{user.email}</User>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </UserMenuLinks>
  );
};
