import axios from 'axios';
import { List } from 'immutable';

const api = process.env.REACT_APP_API;

function save(trainingEntry) {
  return axios
    .post(`${api}/training-entry`, { trainingEntry } )
    .then(ret => ret.data)
    .then(result => result)
  ;
}

export default {
  save,
};
