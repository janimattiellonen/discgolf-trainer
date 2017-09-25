// @flow

import React from 'react';
import PropTypes from 'prop-types';

export default class TrainingEntryPage extends React.Component {
  componentWillMount() {
    const { match, getTrainingEntry, getTrainingEntries } = this.props;
    getTrainingEntries();
    getTrainingEntry(match.params.id);
  }

  render() {
    const { trainingEntry } = this.props;

    return (
      <div>
        {trainingEntry && trainingEntry.id &&
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Duration</th>
                <th>Precision</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{trainingEntry.id}</td>
                <td>{trainingEntry.duration}</td>
                <td>{trainingEntry.precision * 100}%</td>
              </tr>
            </tbody>
          </table>
        }
      </div>
    );
  }
}
