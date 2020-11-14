import React from 'react';
import { SnackbarProvider } from 'notistack';
import { I18nextProvider } from 'react-i18next';

import i18n from '../i18n';

import { LanguageProvider, useLanguage } from './useLanguage';
import { DataProvider, useData } from './useData';

const AppProvider: React.FC = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <DataProvider>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {children}
          </SnackbarProvider>
        </DataProvider>
      </LanguageProvider>
    </I18nextProvider>
  );
};

export { useLanguage, useData };
export default AppProvider;
