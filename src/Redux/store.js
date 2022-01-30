import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import loginReducer from './Slice/LoginSlice';
import homeReducer from './Slice/HomeSlice';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const reducers = combineReducers({
  login: loginReducer,
  home: homeReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  timeout: null,
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['login'], //Things u want to persist
  blacklist: ['home'], //Things u dont
};

const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = createStore(persistedReducer, applyMiddleware(logger));

// export const store = configureStore({
//   reducer: persistedReducer,
//   // devTools: true
//   // middleware: [createLogger()],

// });
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
  }),
});

export const persistor = persistStore(store);
