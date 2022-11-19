import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const UserPage = styled.section``;
export const UserWrapper = styled.section`
  display: flex;
  flex-direction: column;
  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;
