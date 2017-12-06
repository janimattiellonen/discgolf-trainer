// @flow

import React from 'react';
import PropTypes from 'prop-types';

import TrainingEntryTable from '../../TrainingEntryTable';

export default class TrainingEntryListPage extends React.Component {
  componentWillMount() {
    const { getTrainingEntries } = this.props;
    getTrainingEntries();
  }

  render() {

    return (
      <div>
        TrainingEntryListPage

        <TrainingEntryTable
            trainingEntries={[]}
        />
      </div>
    );
  }
}
