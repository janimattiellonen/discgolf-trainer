// @flow

import React from 'react';
import PropTypes from 'prop-types';
import TrainingEntryForm from '../../TrainingEntryForm';
import mainStyles from '../App.pcss';

export default class NewTrainingEntryPage extends React.Component {
  componentWillMount() {
    const { match, getTrainingEntry, getTrainingEntries } = this.props;
    getTrainingEntries();
    getTrainingEntry(match.params.id);
  }

  render() {
    const { trainingEntry } = this.props;

    return (
      <div className="main">
        <div className={mainStyles.header}>
          <h1>New training entry</h1>
        </div>

        <div className={mainStyles.content}>
            <TrainingEntryForm />
        </div>
      </div>
    );
  }
}
