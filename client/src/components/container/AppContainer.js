import React from 'react';
//import logo from '../assets/trollo.png';
require('bootstrap/dist/css/bootstrap.css');
import styles from './App.pcss';

const App = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
);

export default App;
