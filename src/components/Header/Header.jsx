import { Container } from 'components/Container';
import Logo from 'components/Logo';
import TabletUserMenu from 'components/TabletUserMenu';
import UserMenu from 'components/UserMenu';
import { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/selectors.auth';
import { logOutThunk } from 'redux/auth/thunk.auth';
import BurgerBtn from './BurgerBtn';
import BurgerMenu from './BurgerMenu';
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

  const [burgerMenu, setBurgerMenu] = useState(false);

  // const handleOpenBurger = () => {
  //   setBurgerMenu(true);
  // };
  const handleCloseBurger = () => {
    setBurgerMenu(false);
  };

  const handTogleBurger = () => {
    setBurgerMenu(!burgerMenu);
  };

  const memoizedLogout = useCallback(() => {
    dispatch(logOutThunk());
  }, [dispatch]);

  return (
    <PageHeader>
      <Container>
        <HeaderWrapper>
          <HeaderNavigation>
            <Logo onClick={handleCloseBurger} />
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
                <>
                  <TabletUserMenu handleLogout={memoizedLogout} />
                  <BurgerBtn onClick={handTogleBurger} isOpen={burgerMenu} />
                </>
              )}
            </HeaderList>
          </HeaderNavigation>
        </HeaderWrapper>
      </Container>
      {isAuth && !burgerMenu && <UserMenu handleLogout={memoizedLogout} />}
      {isAuth && burgerMenu && <BurgerMenu onClick={handleCloseBurger} />}
    </PageHeader>
  );
}
