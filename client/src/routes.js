import { getPersons } from './ducks/person';
import { getTrainingSession } from './ducks/training';

const routes = {
  HOME: {
    path: '/',
    thunk: (dispatch, getState) => {
      return dispatch(getPersons());
    },
  },
  USER: {
    path: '/user/:id',
    thunk: (dispatch, getState) => {
      return dispatch(getPersons());
    }
  },
  TRAINING: {
    path: '/training/:id',
    thunk: (dispatch, getState) => {
      console.log(JSON.stringify(getState().location.payload.id));
      return dispatch(getTrainingSession(getState().location.payload.id));
    }
  }
};

export default routes;
