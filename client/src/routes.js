import { getPersons } from './ducks/person';
import { getTrainingSessions } from './ducks/training';

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
      console.log("here");
      return dispatch(getTrainingSessions());
    }
  }
};

export default routes;
