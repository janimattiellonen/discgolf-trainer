// @flow

import React from 'react';
import PropTypes from 'prop-types';

export default class TrainingEntryPage extends React.Component {
  componentWillMount() {
    const { match, getTrainingSession, getTrainingSessions } = this.props;
    getTrainingSessions();
    getTrainingSession(match.params.id);
  }

  render() {
    const { trainingSession } = this.props;

    return (
      <div>
        {trainingSession && trainingSession.id &&
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
                <td>{trainingSession.id}</td>
                <td>{trainingSession.duration}</td>
                <td>{trainingSession.precision * 100}%</td>
              </tr>
            </tbody>
          </table>
        }
      </div>
    );
  }
}
