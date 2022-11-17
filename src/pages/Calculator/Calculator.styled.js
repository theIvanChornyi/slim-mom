import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const Thumb = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

@media ${breakpoints.desktop}{
    flex-direction: row;
}`;
