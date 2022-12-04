import { useSelector, useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { selectIsRefreshing } from './../Redux/auth/authSelectors';
import { refreshUser } from 'Redux/auth/authOperations';

const BlockAbout = lazy(() => import('../pages/Home/Home'));
const ContactsBlock = lazy(() => import('../pages/Contacts/Contacts'));
const RegistrationBlock = lazy(() =>
  import('../pages/Registration/Registration')
);
const LoginBlock = lazy(() => import('../pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BlockAbout />} />
        <Route
          path="/register"
          element={
            <PublicRoute
              redirectTo="/contacts"
              component={<RegistrationBlock />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginBlock />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsBlock />} />
          }
        />
      </Route>
    </Routes>
  );
};
