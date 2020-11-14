import styled, { css } from 'styled-components';

import { FiArrowLeft } from 'react-icons/fi';
import { BsBoxArrowUpRight } from 'react-icons/bs';

import { ReactComponent as Pharmacy } from '../../../assets/svg/pharmacy.svg';

export const PharmacyIcon = styled(Pharmacy)`
  width: 35px;
  height: 35px;
`;

export const LinkIcon = styled(BsBoxArrowUpRight)`
  width: 15px;
  height: 15px;

  color: var(--color-primary-lighter);
  transition: var(--transition-slow);
  cursor: pointer;

  &:hover {
    color: var(--color-primary-dark);
    transition: var(--transition-slow);
  }
`;

const iconCss = css`
  width: 30px;
  height: 30px;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  cursor: pointer;

  padding: 5px;
  border-radius: 50%;

  transition: var(--transition-slow);

  &.disabled {
    color: var(--disabled);
    border: 2px solid var(--disabled);
    cursor: not-allowed;
  }

  &.filled {
    color: white;
    background: var(--color-primary);
    transition: var(--transition-slow);
  }

  &.active:hover {
    color: white;
    background: var(--color-primary);
    transition: var(--transition-slow);
  }
`;

export const LeftIcon = styled(FiArrowLeft)`
  ${iconCss}
`;

export const Container = styled.form`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  flex-direction: column;

  footer button {
    height: 66px;
  }

  @media (min-width: 390px) {
    justify-content: flex-start;
  }
`;

export const FormHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;

  padding: 10px 0;

  border-bottom: 1px solid var(--border-color);

  .header-info {
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-direction: column;

    margin-left: 30px;

    h1 {
      font-size: 24px;
      color: var(--text-color-dark);
    }

    p {
      text-align: left;
      margin: 10px 0;
      font-size: 14px;
      color: var(--text-color);

      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        text-align: right;
        font-weight: 500;
        color: var(--color-primary);
        cursor: pointer;

        text-decoration: none;
        transition: var(--transition-slow);
        position: relative;

        &:before {
          content: '';
          position: absolute;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--color-primary-dark);
          visibility: hidden;
          transition: all var(--transition-slow);
          width: 0;
        }

        &:hover:before {
          visibility: visible;
          width: 100%;
        }

        &:hover {
          transition: var(--transition-slow);
        }
      }
    }
  }

  @media (min-width: 390px) {
    padding: 10px 20px;
  }
`;
export const PharmacyCard = styled.div`
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-bottom: 1px solid var(--border-color);

  .pharmacy-info {
    margin-left: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    .info-text {
      font-size: 12px;
      margin: 4px 0;
      color: var(--text-color);
    }

    .info {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      h2 {
        font-size: 15px;
        color: var(--text-color-dark);
      }
      span {
        font-size: 12px;
        color: var(--text-color);
        margin-left: 7px;
      }
      a {
        margin-left: 15px;
      }
    }

    p {
      font-weight: 500;
      text-align: center;
      margin: 6px 0;
      font-size: 13px;
      color: var(--color-primary-dark);
    }
  }

  @media (min-width: 390px) {
    .pharmacy-info {
      .info {
        h2 {
          font-size: 22px;
        }
        span {
          margin-left: 15px;
        }
      }

      p {
        font-size: 16px;
      }
    }
  }
`;
