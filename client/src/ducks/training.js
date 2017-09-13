import { List, Map } from 'immutable';

const defaultState = Map({
  trainingSessions: List(),
});

export function getTrainingSessions() {
  console.log("what????");
  return (dispatch) => {
    console.log("dsdfgdfgdfg");
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
// list.findIndex(item => item.id === action.book.id);
export default (state = defaultState, action) => {
  const { type, payload } = action;
  console.log("type: " + type);
  switch (type) {
    case 'GET_TRAINING_SESSION':
      console.log("why?");
      console.log("id: " + payload);
      console.log("sessions: " + JSON.stringify(state.get('trainingSessions')));
      const tt = state.get('trainingSessions').find(p => p.id === parseInt(payload));
      console.log("ss: " + JSON.stringify(tt));
      return state.set('trainingSession', tt);

    case 'GET_TRAINING_SESSIONS':
      console.log("yeah: " + JSON.stringify(payload));
      return state.set('trainingSessions', payload);

    default:
      return state;
  }
};
