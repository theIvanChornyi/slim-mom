import styled from 'styled-components';
import straw from '../../helpers/images/strawberry-desktop.png';
import banana from '../../helpers/images/banana-tablet.png';
import leaves from '../../helpers/images/leaves-aside-tablet.png';
import vector_d from '../../helpers/images/vector-desktop.png';
import vector from '../../helpers/images/vector-tablet.png';
import frame from '../../helpers/images/desktop.png';
import { breakpoints } from 'helpers/breakpoints';

export const BackgroundStyled = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    flex-grow: 2;

    @media ${breakpoints.minTablet} {
        background-image: url(${banana}), url(${leaves}), url(${straw}), url(${vector});
        background-repeat: no-repeat;
        background-position: right 0px bottom 0px, right -50px bottom 279px, right 12px bottom 279px;
    }

    @media ${breakpoints.desktop} {
        background-image: url(${frame}), url(${vector_d});
        background-position: bottom right, bottom right;
        background-position: no-repeat;
    }
`;