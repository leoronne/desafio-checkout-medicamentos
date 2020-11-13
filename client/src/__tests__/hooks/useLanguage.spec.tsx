import { waitFor } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';

import { LanguageProvider, useLanguage } from '../../hooks/useLanguage';

describe('Language Hook', () => {
  it('should be able to change language', async () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    await act(async () => {
      result.current.changeLanguage('pt');

      await waitFor(() => {
        expect(result.current.language).toBe('pt');
      });
    });

    await act(async () => {
      result.current.changeLanguage('en');

      await waitFor(() => {
        expect(result.current.language).toBe('en');
      });
    });
  });
});
