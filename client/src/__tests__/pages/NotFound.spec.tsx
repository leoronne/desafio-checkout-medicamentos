import React from 'react';
import { render } from '@testing-library/react';

import { NotFound } from '../../pages';

const mockedHistoryPush = jest.fn();

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
    }),
  };
});

describe('NotFound page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should render', async () => {
    const { asFragment } = render(<NotFound />);

    const html = asFragment();

    expect(html).toMatchSnapshot();
  });
});
