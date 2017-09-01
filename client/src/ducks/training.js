import { List, Map } from 'immutable';


const defaultState = Map({
  trainingSessions: List(),
});

export function getTrainingSessions() {
  console.log("what?");
  return function (dispatch) {
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
export default function (state = defaultState, action) {
  const { type, payload } = action;
  console.log("type: " + type);
  switch (type) {
    case 'GET_TRAINING_SESSION_FULFILLED':
    console.log("why?");
      return state.get('trainingSessions').
        findIndex(item => item.id === payload.id)

    case 'GET_TRAINING_SESSIONS':
      console.log("sss");
      return state.set('trainingSessions', payload);

    default:
      return state;
  }
};
