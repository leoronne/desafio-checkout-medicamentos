import styled from 'styled-components';

import { ReactComponent as Medicine } from '../../assets/svg/medicine.svg';

export const MedicineIcon = styled(Medicine)`
  width: 20px;
  height: 20px;
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 91px);

  padding-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  max-width: 720px;

  overflow-y: auto;

  border-radius: var(--border-radius);
  background-color: white;
  box-shadow: var(--box-shadow);

  padding: 15px;

  @media (min-width: 390px) {
    padding: 25px 40px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;

    padding: 10px;

    border-bottom: 1px solid var(--border-color);

    h1 {
      font-size: 28px;
      color: var(--text-color-dark);
    }

    p {
      text-align: center;
      margin: 15px 0;
      font-size: 14px;
      color: var(--text-color);
    }
  }

  @media (min-width: 390px) {
    justify-content: flex-start;
    header {
      padding: 10px 20px;
      h1 {
        font-size: 34px;
      }
    }
  }
`;

export const MedicineCard = styled.div`
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-bottom: 1px solid var(--border-color);

  .medicine-info {
    margin-left: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    h2 {
      font-size: 15px;
      color: var(--text-color-dark);
    }

    h4 {
      font-size: 15px;
      color: var(--color-primary);
      margin: 6px 0;
    }

    p {
      text-align: center;
      margin: 6px 0;
      font-size: 12px;
      color: var(--text-color);
    }
  }

  @media (min-width: 390px) {
    .medicine-logo {
      padding: 10px 0;
    }

    .medicine-info {
      h2 {
        font-size: 18px;
      }

      h4 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
      }
    }
  }
`;

export const MainContent = styled.main`
  padding: 0 5px 5px 5px;

  width: 100%;
  height: auto;
  overflow-y: none;
  @media (min-width: 390px) {
    padding: 0 10px 10px 10px;
    height: 100%;
    overflow-y: auto;
  }
`;

export const FormFooter = styled.footer`
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  .footer-text {
    text-align: justify;
    font-size: 14px;
    color: var(--text-color);

    line-height: 22px;
  }

  button {
    margin-top: 25px;
    width: 100%;
  }
`;
