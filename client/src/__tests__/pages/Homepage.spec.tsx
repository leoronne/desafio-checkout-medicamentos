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

  it('should find pharmacy', async () => {
    await act(async () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <Homepage />
        </Provider>
      );

      const submitButton = await waitFor(() => getByTestId('submit-button'));

      fireEvent.click(submitButton);

      const form = await waitFor(() => getByTestId('initial-form'));
      const checkoutCard = await waitFor(() => getByTestId('checkout-form'));

      await waitFor(() => {
        expect(form.classList.contains('hidden-card')).toBe(true);
        expect(checkoutCard.classList.contains('hidden-card')).toBe(false);
      });
    });
  });

  it('should be able to return to page 1 after find pharmacy', async () => {
    await act(async () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <Homepage />
        </Provider>
      );

      const submitButton = await waitFor(() => getByTestId('submit-button'));

      fireEvent.click(submitButton);

      const returnButton = await waitFor(() => getByTestId('return-button'));

      fireEvent.click(returnButton);

      const form = await waitFor(() => getByTestId('initial-form'));
      const checkoutCard = await waitFor(() => getByTestId('checkout-form'));

      await waitFor(() => {
        expect(form.classList.contains('hidden-card')).toBe(false);
        expect(checkoutCard.classList.contains('hidden-card')).toBe(true);
      });
    });
  });

  it('should submit checkout', async () => {
    await act(async () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <Homepage />
        </Provider>
      );

      const submitButton = await waitFor(() => getByTestId('submit-button'));

      fireEvent.click(submitButton);

      const submitCheckout = await waitFor(() => getByTestId('submit-checkout'));

      fireEvent.click(submitCheckout);

      const form = await waitFor(() => getByTestId('initial-form'));
      const checkoutCard = await waitFor(() => getByTestId('checkout-form'));

      await waitFor(() => {
        expect(form.classList.contains('hidden-card')).toBe(false);
        expect(checkoutCard.classList.contains('hidden-card')).toBe(true);
      });
    });
  });
});
