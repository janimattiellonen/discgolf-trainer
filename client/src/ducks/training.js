import { List, Map } from 'immutable';
import trainingEntryService from '../services/training-entry';

const defaultState = Map({
  trainingEntries: List(),
});

export function getTrainingEntries() {
  return (dispatch) => {
    return dispatch({
      type: 'GET_TRAINING_ENTRIES',
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

export function getTrainingEntry(id) {
  return {
    type: 'GET_TRAINING_ENTRY',
    payload: id,
  };
}

export function saveTrainingEntry(trainingEntry) {
  return (dispatch) => {
    return trainingEntryService.save(trainingEntry); // handle then() etc
  };
}

export default (state = defaultState, action) => {
  const { type, payload } = action;
  console.log("type: " + type);
  switch (type) {
    case 'GET_TRAINING_ENTRY':
      const tt = state.get('trainingEntries').find(p => p.id === parseInt(payload));
      return state.set('trainingEntry', tt);

    case 'GET_TRAINING_ENTRIES':
      return state.set('trainingEntries', payload);

    case 'SAVE_TRAINING_ENTRY':
      return state;
    default:
      return state;
  }
};
