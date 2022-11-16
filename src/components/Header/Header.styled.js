import { breakpoints } from 'helpers/breakpoints';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div``;

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

  @media ${breakpoints.desktop} {
    padding: 80px 0 0;
    justify-content: start;
    align-items: flex-end;
    gap: 137px;
  }
`;
export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const HeaderListItem = styled.li``;

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
`;
