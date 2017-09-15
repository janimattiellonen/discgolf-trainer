import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from './pages/NewTrainingEntryPage';
import { getTrainingSession, getTrainingSessions } from '../../ducks/training';

export default connect(
  (state, props) => ({
    trainingSession: state.training.get('trainingSessions').find(t => t.id === props.id),
    trainingSession: state.training.get('trainingSession'),
  }),
  dispatch => bindActionCreators({
    getTrainingSession,
    getTrainingSessions,
  }, dispatch),
)(Wrapped);
