import { List, Map } from 'immutable';

const defaultState = Map({
  trainingSessions: List(),
});

export function getTrainingSessions() {
  return (dispatch) => {
    return dispatch({
      type: 'GET_TRAINING_SESSIONS',
      payload: List([
        {
          id: 1,
          duration: 60,
          precision: 0.50,
        },
        {
          id: 2,
          duration: 30,
          precision: 0.33,
        },
        {
          id: 3,
          duration: 45,
          precision: 0.75,
        },
      ]),
    });
  }
}

export function getTrainingSession(id) {
  return {
    type: 'GET_TRAINING_SESSION',
    payload: id,
  };
}

export default (state = defaultState, action) => {
  const { type, payload } = action;
  console.log("type: " + type);
  switch (type) {
    case 'GET_TRAINING_SESSION':
      const tt = state.get('trainingSessions').find(p => p.id === parseInt(payload));
      return state.set('trainingSession', tt);

    case 'GET_TRAINING_SESSIONS':
      return state.set('trainingSessions', payload);

    default:
      return state;
  }
};
