import { Map } from 'immutable';

const defaultState = Map({
  practise: null
});

export default (state = defaultState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        default:
            return state;
    }
};