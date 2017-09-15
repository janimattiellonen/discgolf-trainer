import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from './components/container/AppContainer';
import AppLayout from './components/container/layouts/AppLayout';
import NewTrainingEntryContainer from './components/container/NewTrainingEntryContainer';
import TrainingEntryContainer from './components/container/TrainingEntryContainer';

function AppLayoutRoute({ match }) {
  return (
    <AppLayout>
      <Route exact path={`${match.url}/new`} component={NewTrainingEntryContainer} />
      <Route exact path={`${match.url}/:id`} component={TrainingEntryContainer} />
    </AppLayout>
  );
}

const Root = props => {
  const { history, store } = props;
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Route path="/training" component={AppLayoutRoute} />
        </App>
      </ConnectedRouter>
    </Provider>
  );
};

export default Root;
