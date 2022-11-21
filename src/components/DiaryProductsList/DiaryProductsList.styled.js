import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const ListProducts = styled.ul`
  margin: 22px 0 65px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 240px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #264061;
  }

  @media ${breakpoints.minTablet} {
    gap: 22px;
    max-width: 610px;
    height: 286px;
    margin: 0 0 85px;
    padding-right: 30px;
  }
  @media ${breakpoints.desktop} {
    height: 280px;
    margin: 60px auto 32px 0;
  }
`;

export const Text = styled.p`
  height: 242px;
  font-family: 'Jost';
  font-weight: 400;
  font-size: 28px;
  line-height: 17px;
  letter-spacing: 0.04em;

  margin: 40px 0 50px;

  color: #212121;

  @media ${breakpoints.minTablet} {
    width: 286px;
    max-height: 610px;
    margin-right: 22px;
    margin-bottom: 130px;

    line-height: 20px;

    color: #212121;
  }
  @media ${breakpoints.desktop} {
    height: 280px;
    margin-bottom: 0;
  }
`;
