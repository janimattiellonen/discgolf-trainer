// @flow

import React from 'react';
import PropTypes from 'prop-types';
import TrainingEntryForm from '../../TrainingEntryForm';
import mainStyles from '../App.pcss';

export default class NewTrainingEntryPage extends React.Component {
  componentWillMount() {
    const { match, getTrainingEntry, getTrainingEntries } = this.props;
    //getTrainingEntries();

    if (match.params.id) {
      getTrainingEntry(match.params.id);
    }
  }

  render() {
    const { trainingEntry, saveTrainingEntry } = this.props;

    return (
      <div className="main">
        <div className={mainStyles.header}>
          <h1>New training entry</h1>
        </div>

        <div className="container">
          <div className={mainStyles.content}>
            <TrainingEntryForm
              onSubmit={saveTrainingEntry}
            />
          </div>
        </div>
      </div>
    );
  }
}
