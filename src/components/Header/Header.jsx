import { Container } from 'components/Container';
import Logo from 'components/Logo';
import TabletUserMenu from 'components/TabletUserMenu';
import UserMenu from 'components/UserMenu';
import { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [burgerMenu, setBurgerMenu] = useState(false);

  const handleCloseBurger = () => {
    setBurgerMenu(false);
  };

  const handTogleBurger = () => {
    setBurgerMenu(!burgerMenu);
  };

  const memoizedLogout = useCallback(async () => {
    try {
      await dispatch(logOutThunk()).unwrap();
      navigate('/login');
    } catch (error) {}
  }, [dispatch, navigate]);

  return (
    <PageHeader>
      <Container>
        <HeaderWrapper>
          <HeaderNavigation>
            <Logo
              onClick={handleCloseBurger}
              isAuth={isAuth}
              isOnHome={location.pathname}
            />
            <HeaderList isAuth={isAuth} isOnHome={location.pathname}>
              {!isAuth ? (
                <>
                  <div>
                    <HeaderNavLink to="/login">Sign in</HeaderNavLink>
                  </div>
                  <div>
                    <HeaderNavLink to="/registration">
                      Registration
                    </HeaderNavLink>
                  </div>
                </>
              ) : (
                <>
                  <HeaderListItem>
                    <div>
                      <HeaderNavLink to="/diary">Diary</HeaderNavLink>
                    </div>
                    <div>
                      <HeaderNavLink to="/calculator">Calculator</HeaderNavLink>
                    </div>
                  </HeaderListItem>
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
