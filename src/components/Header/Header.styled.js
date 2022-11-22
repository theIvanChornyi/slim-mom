import { breakpoints } from 'helpers/breakpoints';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: none;

  @media ${breakpoints.desktop} {
    display: block;
    margin-left: ${p => (p.isAuth ? '0' : '150px')};
  }
`;

export const PageHeader = styled.header`
  position: relative;
  ::after {
    content: '';
    top: 80px;
    position: absolute;
    height: 2px;
    min-width: 320px;
    width: 100%;
    background-color: #e0e0e0;

    @media ${breakpoints.desktop} {
      display: none;
    }
  }
`;

export const HeaderNavigation = styled.nav`
  padding: 20px 0 16px;
  display: flex;
  justify-content: space-between;

  @media ${breakpoints.minTablet} {
    padding: 20px 37px 16px 37px;
  }

  @media ${breakpoints.desktop} {
    position: absolute;
    padding: 50px 0 0 0;
    justify-content: start;
    align-items: flex-end;
    gap: 137px;
    z-index: 2;
  }
`;
export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  @media ${breakpoints.minTablet} {
    gap: 30px;
  }
  @media ${breakpoints.desktop} {
    gap: ${p => {
      return p.isAuth ? '520px' : '16px';
    }};
    display: ${p => {
      return !p.isAuth && p.isOnHome !== '/home' && 'none';
    }};
    align-items: flex-end;
  }
`;

export const HeaderListItem = styled.li`
  padding-left: 20px;
  display: none;
  @media ${breakpoints.desktop} {
    display: flex;
    gap: 16px;
    padding-left: 0;
  }
`;

export const HeaderNavLink = styled(NavLink)`
  :not(.active) {
    color: #9b9faa;
  }

  text-decoration: none;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #212121;
  transition: color linear 250ms;

  :hover,
  :focus {
    color: #212121;
  }
`;
