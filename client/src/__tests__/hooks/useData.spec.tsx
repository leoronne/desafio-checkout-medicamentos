import { waitFor } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';

import { DataProvider, useData } from '../../hooks/useData';

import { mockPharmacies } from '../../__mocks__';

describe('Data Hook', () => {
  it('should be able to get close pharmacies', async () => {
    const { result } = renderHook(() => useData(), {
      wrapper: DataProvider,
    });

    await act(async () => {
      result.current.getClosePharmacies();

      await waitFor(() => {
        expect(result.current.closePharmacies).toStrictEqual(mockPharmacies);
      });
    });
  });
});
