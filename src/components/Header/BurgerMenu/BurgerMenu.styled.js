// import { breakpoints } from 'helpers/breakpoints';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BurgerOverlay = styled.div`
  position: absolute;
  z-index: 1000;
  min-width: 320px;
  width: 100%;
  min-height: 100vh;
  background: #264061;
  text-align: center;
`;

export const BurgerList = styled.ul``;

export const BurgerItem = styled.li``;
export const BurgerLink = styled(NavLink)`
  display: inline-block;
  padding: 20px;
  font-family: 'Jost', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  color: #ffffff;

  :not(.active) {
    color: #9b9faa;
  }
`;
