import React from 'react';
import Navigation from './src/Routes/Navigation';
//import {Provider as PaperProvider} from 'react-native-paper';
import {store, persistor} from './src/Redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
