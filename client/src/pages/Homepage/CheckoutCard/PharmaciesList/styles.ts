import styled, { css } from 'styled-components';
import { BiTime } from 'react-icons/bi';
import { MdExpandMore, MdClose } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';

import { ReactComponent as Pharmacy } from '../../../../assets/svg/pharmacy.svg';

const iconCSS = css`
  width: 15px;
  height: 15px;
  cursor: pointer;
  transition: var(--transition-slow);

  &:hover {
    transition: filter var(--transition-slow);
    filter: brightness(1.2);
  }
`;

export const Container = styled.div`
  max-height: 450px;
  overflow-y: auto;
  padding: 10px 10px 0px 15px;

  .MuiCollapse-container {
    width: 100%;
  }
`;

export const PharmacyCard = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  border-radius: 6px;
  font-size: 12px;
  width: 100%;
  position: relative;

  .information {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    span {
      margin-left: 20px;
      color: var(--text-color);
    }
    .pharmacy-name {
      font-weight: 500;
      text-align: left;
      font-size: 14px;

      & .distance {
        margin-left: 5px;
        font-size: 10px;
        font-weight: 400;
      }
    }

    .total-value {
      color: var(--color-primary-dark);
      font-size: 14px;
    }
  }

  @media (max-width: 568px) {
    .information {
      .pharmacy-name {
        display: flex;
        align-items: flex-start;
        flex-direction: column;

        & .distance {
          margin-left: 0;
        }
      }
    }
  }
`;

export const PharmacyIcon = styled(Pharmacy)`
  ${iconCSS}
`;

export const ExpandIcon = styled(MdExpandMore)`
  ${iconCSS}
  color: var(--color-primary);
`;

export const SeeIcon = styled(FiPlus)`
  ${iconCSS}
  color: var(--color-primary);
`;

export const CancelPharmacyIcon = styled(MdClose)`
  ${iconCSS}
  color: var(--color-primary);
`;

export const TimeIcon = styled(BiTime)`
  ${iconCSS}
  color: var(--disabled);
  position: absolute;
  right: 0;
`;
