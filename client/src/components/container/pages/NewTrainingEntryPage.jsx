// @flow

import React from 'react';
import PropTypes from 'prop-types';
import TrainingEntryForm from '../../TrainingEntryForm';

export default class NewTrainingEntryPage extends React.Component {
  componentWillMount() {
    const { match, getTrainingEntry, getTrainingEntries } = this.props;
    getTrainingEntries();
    getTrainingEntry(match.params.id);
  }

  render() {
    const { trainingEntry } = this.props;

    return (
      <div>
        <h1>New training entry</h1>

        <TrainingEntryForm />
      </div>
    );
  }
}
