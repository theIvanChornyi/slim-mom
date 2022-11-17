import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  position: relative;
`;
export const SpinnerContainer = styled.img`
  /* width: px;
  height: px; */
`;
export const Spinner = styled.img`
  /* width: px;
  height: px; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: transform 250ms;
`;
