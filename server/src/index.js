import express from 'express';
var bodyParser = require('body-parser');
import cors from 'cors';
import dotenv from 'dotenv';
import { Range } from 'immutable';
import mysql from 'mysql';
import personService from './services/person';

dotenv.config();

const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME,
});

let persons = Range(1, 21).map(personService.createPerson).toList();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/person', function (req, res, next) {
  res.json(persons);
});

app.post('/training-entry', (req, res) => {
  console.log("Params: " + JSON.stringify(req.body));
  // Params: {"trainingEntry":{"duration":"22","precision":"22"}}
  
  res.json({success: true});
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})
