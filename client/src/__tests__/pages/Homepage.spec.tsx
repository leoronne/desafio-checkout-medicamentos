import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import notistack from 'notistack';

import { mockPharmacies } from '../../__mocks__';

import { Homepage } from '../../pages';

const mockedHistoryPush = jest.fn();
const enqueueSnackbar = jest.fn();
const closeSnackbar = jest.fn();
const mockGetClosePharmacies = jest.fn();

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
    useData: () => ({
      getClosePharmacies: mockGetClosePharmacies,
      medicines: [
        {
          name: 'Ácido zoledrônico 4mg',
          price: 10.86,
          quantity: 1,
        },
        {
          name: 'Água para injeção 1mL',
          price: 30.06,
          quantity: 1,
        },
        {
          name: 'Bromazepam 3mg',
          price: 0.46,
          quantity: 1,
        },
      ],
      coordinates: {
        lat: -23.5648304,
        lng: -46.6436604,
      },
      closePharmacies: mockPharmacies,
    }),
  };
});

describe('Homepage', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
    mockGetClosePharmacies.mockClear();

    jest.spyOn(notistack, 'useSnackbar').mockImplementation(() => {
      return { enqueueSnackbar, closeSnackbar };
    });
  });

  it('should render', async () => {
    await act(async () => {
      const { asFragment } = render(<Homepage />);

      const html = asFragment();

      expect(html).toMatchSnapshot();
    });
  });

  it('should find pharmacy', async () => {
    await act(async () => {
      const { getByTestId } = render(<Homepage />);

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
      const { getByTestId } = render(<Homepage />);

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
      const { getByTestId } = render(<Homepage />);

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
