import { List, Map } from 'immutable';


const defaultState = Map({
  trainingSessions: List(),
});

export function getTrainingSessions() {
  return {
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
  };
}

export function getTrainingSession(id) {
  return {
    type: 'GET_TRAINING_SESSION',
    payload: id,
  };
}
// list.findIndex(item => item.id === action.book.id);
export default function (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_TRAINING_SESSION_FULFILLED':
      return state.get('trainingSessions').
        findIndex(item => item.id === payload.id)

    case 'GET_TRAINING_SESSIONS_FULFILLED':
      return state.set('trainingSessions', payload);

    default:
      return state;
  }
};
