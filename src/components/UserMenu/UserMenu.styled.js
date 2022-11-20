import { breakpoints } from 'helpers/breakpoints';
import styled from 'styled-components';
export const UserMenuHeader = styled.div`
  min-width: 320px;

  /* position: ${p => (p.isOpen ? 'absolute' : 'static')}; */
  top: 81px;
  left: 0;
  right: 0;

  background: #eff1f3;
  @media ${breakpoints.minTablet} {
    display: none;
  }
`;

export const UserSideBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserMenuWrapper = styled.div`
  height: 40px;
  padding: 4px 20px;
  display: ${p => (p.name ? 'flex' : 'none')};
  justify-content: end;
  align-items: center;
  gap: 32px;
`;

export const UserName = styled.div`
  position: relative;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #212121;

  ::after {
    content: '';
    position: absolute;
    top: -8px;
    right: -16px;
    height: 32px;
    width: 2px;
    background-color: #e0e0e0;
  }
`;

export const UserMenuButton = styled.button`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  border: none;

  cursor: pointer;
`;
