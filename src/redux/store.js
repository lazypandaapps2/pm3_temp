
import { combineReducers, createStore } from 'redux';
import themeReducer from './reducers/themeReducer';
import userReducer from './reducers/userReducer';
import languageReducer from './reducers/languageReducer';

import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root1.6',
  storage: AsyncStorage,
  // blacklist: ['signed']
};

const rootReducer = combineReducers({
  themeReducer,
  userReducer,
  languageReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

let persistor = persistStore(store);
export { persistor }

export default store;