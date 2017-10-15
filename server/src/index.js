import express from 'express';
var bodyParser = require('body-parser');
import cors from 'cors';
import dotenv from 'dotenv';
import { Range } from 'immutable';
import mysql from 'mysql';
import personService from './services/person';
import trainingEntryService from './services/training-entry-service';

dotenv.config();

const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME,
});

connection.config.queryFormat = function (query, values) {
  if (!values) return query;
  return query.replace(/\:(\w+)/g, function (txt, key) {
    if (values.hasOwnProperty(key)) {
      return this.escape(values[key]);
    }
    return txt;
  }.bind(this));
};

let persons = Range(1, 21).map(personService.createPerson).toList();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/person', function (req, res, next) {
  res.json(persons);
});

app.get('/training-entries', (req, res) => {

});

app.post('/training-entries', (req, res) => {
  console.log("Params: " + JSON.stringify(req.body));
 
  trainingEntryService.save(req.body.trainingEntry, connection, (error, results, fields) => {
    if (error) {
      throw `An error occured while saving training entry: ${error}`;
    }

    res.json({success: true});
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})
