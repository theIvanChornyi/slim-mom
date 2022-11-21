import styled from 'styled-components';
import straw from '../../helpers/images/strawberry-desktop.png';
import banana from '../../helpers/images/banana-tablet.png';
import leaves from '../../helpers/images/leaves-aside-tablet.png';
import vector_d from '../../helpers/images/vector-desktop.png';
import vector from '../../helpers/images/vector-tablet.png';
import frame from '../../helpers/images/desktop.png';
import { breakpoints } from 'helpers/breakpoints';

export const BackgroundStyled = styled.div`
  background-color: ${p => p.theme.color};

  min-width: 320px;
  position: relative;
  width: 100%;
  min-height: 850px;
  flex-grow: 2;

  @media ${breakpoints.minTablet} {
    background-image: ${p =>
      !p.isAuth
        ? ` url(${banana}), url(${leaves}),
      url(${straw}), url(${vector})`
        : 'none'};
    background-repeat: no-repeat;
    background-position: right 0px bottom 0px, right -50px bottom 279px,
      right 12px bottom 279px;
  }

  @media ${breakpoints.desktop} {
    background-image: ${p =>
      !p.isAuth ? `url(${frame}), url(${vector_d})` : 'none'};

    background-position: bottom right, bottom right;
    background-position: no-repeat;
  }
`;
