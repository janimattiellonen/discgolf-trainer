import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from './pages/TrainingEntryPage';

export default connect(
  (state, props) => ({
    trainingSession: state.training.get('trainingSessions').find(t => t.id === props.id),
  }),
  dispatch => bindActionCreators({

  }, dispatch),
)(Wrapped);
