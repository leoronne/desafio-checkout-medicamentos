import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import notistack from 'notistack';

// import { pharmacyResponse } from '../../__mocks__';

import { Homepage } from '../../pages';

const mockedHistoryPush = jest.fn();
const mockedloadData = jest.fn();
const enqueueSnackbar = jest.fn();
const closeSnackbar = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

jest.mock('notistack', () => ({
  useSnackbar: jest.fn(),
}));

jest.mock('../../hooks', () => {
  return {
    useLanguage: () => ({
      language: 'en',
    }),
  };
});

describe('Homepage', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
    mockedloadData.mockClear();

    jest.spyOn(notistack, 'useSnackbar').mockImplementation(() => {
      return { enqueueSnackbar, closeSnackbar };
    });
  });

  const initialState = { output: 10 };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('should render', async () => {
    await act(async () => {
      const { asFragment } = render(
        <Provider store={store}>
          <Homepage />
        </Provider>
      );

      const html = asFragment();

      expect(html).toMatchSnapshot();
    });
  });
});
