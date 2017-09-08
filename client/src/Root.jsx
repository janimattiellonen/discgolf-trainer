import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from './components/container/AppContainer';
import AppLayout from './container/layouts/AppLayout';
import TrainingEntryPage from './container/pages/TrainingEntryPage';

function AppLayoutRoute({ match }) {
  return (
    <AppLayout>
      <Route exact path={`${match.url}/:id`} component={TrainingEntryPage} />
    </AppLayout>
  );
}

const Root = props => {
  const { store } = props;
  return (
    <Provider store={store}>
      <App>
        <Route path="/training" component={AppLayoutRoute} />
      </App>
    </Provider>
  );
};

export default Root;
