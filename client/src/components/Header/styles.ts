import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: transparent;
  clip: rect(auto, auto, auto, auto);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  > h1 {
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: 0.6s ease !important;

    &:hover {
      filter: brightness(1.1);
      transition: filter 0.6s ease !important;
    }

    > a img {
      max-width: 150px;
    }

    > span {
      color: var(--text-color);
      margin-left: 10px;
      font-size: 29px;
      font-weight: 400;
    }
  }

  @media (min-width: 768px) {
    > h1 {
      > a img {
        max-width: 200px;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > a {
    margin-bottom: 3px;
  }

  svg {
    height: 15px;
    width: 15px;
  }

  .MuiInput-underline:before,
  .Mui-focused:before {
    border-bottom: transparent !important;
  }

  .MuiInput-underline:after {
    border-bottom: transparent !important;
  }

  .MuiSelect-icon {
    color: white;
    margin-top: 2px;
  }
`;
