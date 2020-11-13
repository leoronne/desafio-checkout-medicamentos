import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';

import error from '../../assets/svg/404.svg';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 118px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  height: 100%;

  ::-webkit-scrollbar {
    width: 5px;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

  padding: 40px;

  justify-content: center;

  flex-direction: column;

  @media (min-width: 735px) {
    padding: 120px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Left = styled.div`
  color: white;

  h2 {
    font-size: 48px;
    font-weight: 700;
    line-height: 55px;
    color: white;
  }

  p {
    margin-top: 25px;
  }

  .home-link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 25px;

    a {
      width: 80%;
      text-decoration: none;

      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      height: 40px;
      cursor: pointer;
      background: var(--color-secondary);
      border-radius: 5px;
      font-size: 14px;
      outline: 0;

      span {
        text-transform: uppercase;
        margin-top: 3px;
        margin-left: 20px;
      }
    }
  }

  @media (max-width: 735px) {
    p,
    h2 {
      text-align: center;
    }

    a {
      width: 100% !important;
    }
  }
`;

export const Right = styled.div`
  background: no-repeat url(${error}) center right;
  background-size: contain;
  height: 100%;
  width: 80%;
  @media (max-width: 735px) {
    display: none;
  }
`;

export const HomeIcon = styled(FaHome)`
  width: 18px;
  height: 18px;
  color: white;
`;
