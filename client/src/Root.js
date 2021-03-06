import React from 'react';
import App from './components/container/AppContainer';
import { Provider } from 'react-redux';

const Root = props => {
  const { store } = props;
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
