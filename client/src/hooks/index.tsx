import React from 'react';
import { SnackbarProvider } from 'notistack';
// import { Provider as ReduxProvider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../i18n';

// import { store, persistor } from '../store';

import { LanguageProvider } from './useLanguage';

const AppProvider: React.FC = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        {/* <ReduxProvider store={store}> */}
        {/* <PersistGate persistor={persistor}> */}

        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {children}
        </SnackbarProvider>

        {/* </PersistGate> */}
        {/* </ReduxProvider> */}
      </LanguageProvider>
    </I18nextProvider>
  );
};

export default AppProvider;
