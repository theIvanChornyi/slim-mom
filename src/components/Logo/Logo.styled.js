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
export const ImageThumb = styled.div``;
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
      right: -20px;
    }
  }
`;
export const LogoNameAcent = styled.span`
  color: #fc842d;
`;
export const LogoNameText = styled.span``;
