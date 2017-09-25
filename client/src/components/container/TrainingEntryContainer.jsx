import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from './pages/TrainingEntryPage';
import { getTrainingEntry, getTrainingEntries } from '../../ducks/training';

export default connect(
  (state, props) => ({
    trainingEntry: state.training.get('trainingEntries').find(t => t.id === props.id),
    trainingEntry: state.training.get('trainingEntry'),
  }),
  dispatch => bindActionCreators({
    getTrainingEntry,
    getTrainingEntries,
  }, dispatch),
)(Wrapped);
