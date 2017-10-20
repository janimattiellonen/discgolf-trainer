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
    const { match, trainingEntry, saveTrainingEntry } = this.props;

    return (
      <div className="main">
        <div className={mainStyles.header}>
        {
          match.params.id &&
          <h1>Edit training entry</h1>
        }

        {
          !match.params.id &&
          <h1>New training entry</h1>
        }

        </div>

        <div className="container">
          <div className={mainStyles.content}>
            <TrainingEntryForm
              onSubmit={saveTrainingEntry}
              initialValues={trainingEntry}
            />
          </div>
        </div>
      </div>
    );
  }
}
