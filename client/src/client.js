/* global document, __DEVELOPMENT__, window */
/* eslint global-require: "off" */

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
//import { createStore } from './utils/redux';
import createStore from './store';
//import { getMiddlewares, getReducers, getEnhancers, getInitialState } from './config/redux';
import Redbox from 'redbox-react';
//import { connectRoutes } from 'redux-first-router';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import routes from './routes';

const history = createHistory();
require('./app.scss');
//const { reducer, middleware, enhancer } = connectRoutes(history, routes);

if (__DEVELOPMENT__) {
  const Perf = require('react-addons-perf');
  window.Perf = Perf;
}

const store = createStore(history);

function render2(Component, rootElement) {

  if (__DEVELOPMENT__) {
    try {
      ReactDOM.render(
        <AppContainer>
          <Component store={store} history={history} />
        </AppContainer>,
        rootElement,
      );
    } catch (e) {
      ReactDOM.render(
        <Redbox error={e} />,
        rootElement
      );
    }
  } else {
    ReactDOM.render(
      <AppContainer>
        <Component store={store} history={history} />
      </AppContainer>,
      rootElement,
    );
  }
}

function render(Component, rootElement) {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    rootElement,
  );
}

const rootElement = document.getElementById('app');
render(Root, rootElement);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default;
    render(NextRoot, rootElement);
  })
}
