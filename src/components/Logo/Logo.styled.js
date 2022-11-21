import { breakpoints } from 'helpers/breakpoints';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  text-decoration: none;

  @media ${breakpoints.desktop} {
    position: relative;
  }
`;
export const ImageThumb = styled.div`
  width: 47px;
  height: 44px;

  @media ${breakpoints.desktop} {
    width: 71px;
    height: 66px;
  }
`;
export const LogoImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
export const LogoName = styled.div`
  display: none;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.08em;
  color: #212121;

  @media ${breakpoints.minTablet} {
    display: block;
  }

  @media ${breakpoints.desktop} {
    position: absolute;
    left: 60px;
    bottom: -2px;

    ::after {
      content: '';
      position: absolute;
      height: 32px;
      width: 2px;
      background-color: #e0e0e0;
      right: ${p => (p.isDaddy ? '-4px' : '-20px')};
      visibility: ${p => {
        const rule = !p.isAuth && p.isOnHome !== '/home';

        return !rule ? 'visible' : 'hidden';
      }};
    }
  }
`;
export const LogoNameAcent = styled.span`
  color: #fc842d;
`;
export const LogoNameText = styled.span``;
