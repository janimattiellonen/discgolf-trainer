import React from 'react';
import styles from './Person.pcss';
import { Link } from 'react-router-dom';

const Person = props => {
  const { person } = props;
  return (
    <div className={styles.root}>
      <Link to={{ type: 'USER', payload: { id: person.id } }}>{person.lastName}, {person.firstName}</Link>
    </div>
  )
};

export default Person;
