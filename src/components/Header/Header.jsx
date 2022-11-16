import { Container } from 'components/Container';
import Logo from 'components/Logo';
import UserMenu from 'components/UserMenu';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/selectors.auth';
import { logOutThunk } from 'redux/auth/thunk.auth';
import {
  HeaderList,
  HeaderListItem,
  HeaderNavigation,
  HeaderNavLink,
  HeaderWrapper,
  PageHeader,
} from './Header.styled';

export default function Header() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const memoizedLogout = useCallback(() => {
    dispatch(logOutThunk());
  }, [dispatch]);

  return (
    <PageHeader>
      <Container>
        <HeaderWrapper>
          <HeaderNavigation>
            <Logo />
            <HeaderList>
              {!isAuth ? (
                <>
                  <HeaderListItem>
                    <HeaderNavLink to="/login">Sign in</HeaderNavLink>
                  </HeaderListItem>
                  <HeaderListItem>
                    <HeaderNavLink to="/registration">
                      Registration
                    </HeaderNavLink>
                  </HeaderListItem>
                </>
              ) : (
                <button></button>
              )}
            </HeaderList>
          </HeaderNavigation>
        </HeaderWrapper>
      </Container>
      {isAuth && <UserMenu handleLogout={memoizedLogout} />}
    </PageHeader>
  );
}
