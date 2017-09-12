import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as uiReducer } from 'redux-ui';
import { reducer as toastrReducer } from 'react-redux-toastr';
import example from './example';
import person from './person';
import training from './training';
//export { default as example } from './example';
//export { default as person } from './person';
//export { default as training } from './training';


export default combineReducers({
  router: routerReducer,
  form: formReducer,
  ui: uiReducer,
  toastr: toastrReducer,
  example,
  person,
  training,
});
