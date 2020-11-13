import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';

import { LanguageProvider } from '../../hooks/useLanguage';

import { Header } from '../../components';

const mockedHistoryPush = jest.fn();
const mockedChangeLanguage = jest.fn();

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

jest.mock('../../hooks', () => {
  return {
    useLanguage: () => ({
      language: 'en',
      changeLanguage: mockedChangeLanguage,
    }),
  };
});

describe('Header', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should render', async () => {
    const { asFragment } = render(
      <LanguageProvider>
        <Header />
      </LanguageProvider>
    );

    const html = asFragment();

    expect(html).toMatchSnapshot();
  });

  it('should be able to change language', async () => {
    const { getByTestId } = render(
      <LanguageProvider>
        <Header />
      </LanguageProvider>
    );

    await act(async () => {
      let languageSelect = (await waitFor(() => getByTestId('language-select'))) as HTMLInputElement;

      fireEvent.change(languageSelect, { target: { value: 'pt' } });

      languageSelect = (await waitFor(() => getByTestId('language-select'))) as HTMLInputElement;

      await waitFor(() => {
        expect(languageSelect.value).toBe('pt');
      });
    });
  });
});
