import axios from 'axios';
import { List } from 'immutable';

const api = process.env.REACT_APP_API;

function get(id) {
  return axios
    .get(`${api}/training-entries/${id}`)
    .then(ret => ret.data)
    .then(result => result);
}

function save(trainingEntry) {
  return axios
    .post(`${api}/training-entries`, { trainingEntry } )
    .then(ret => ret.data)
    .then(result => result);
}

function update(trainingEntry) {
  return axios
  .put(`${api}/training-entries/${trainingEntry.id}`, { trainingEntry } )
  .then(ret => ret.data)
  .then(result => result);
}

export default {
  get,
  save,
  update,
};
