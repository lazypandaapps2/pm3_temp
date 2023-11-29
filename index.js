/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore, { persistor } from './src/redux/store';

const MainApp = (props) => {
  return (
    <Provider store={configureStore}>
      <PersistGate loading={null} persistor={persistor}>
        <App {...props} />
      </PersistGate>
    </Provider>
  );
}


AppRegistry.registerComponent(appName, () => MainApp);
