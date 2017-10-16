import { List, Map } from 'immutable';
import trainingEntryService from '../services/training-entry';

const defaultState = Map({
  trainingEntries: List(),
  trainingEntry: null,
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
  return (dispatch) => {
    return trainingEntryService.get(id)
    .then(result => dispatch({ type: 'GET_TRAINING_ENTRY_DONE', payload: result }))
  };
}

export function saveTrainingEntry(trainingEntry) {
  return (dispatch) => {
    return trainingEntryService.save(trainingEntry); // handle then() etc
  };
}

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_TRAINING_ENTRY_DONE':
      console.log("payload: " + JSON.stringify(payload));
      return state.set('trainingEntry', payload);

    case 'GET_TRAINING_ENTRIES':
      return state.set('trainingEntries', payload);

    case 'SAVE_TRAINING_ENTRY':
      return state;
    default:
      return state;
  }
};
