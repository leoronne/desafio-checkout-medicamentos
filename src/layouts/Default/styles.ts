import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 20px 10px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 440px) {
    padding: 30px;
  }

  @media (min-width: 1024px) {
    padding: 20px 80px;
  }

  @media (min-width: 1366px) {
    height: 100%;
  }
`;

export const Main = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
