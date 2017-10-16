import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from './pages/NewTrainingEntryPage';
import { getTrainingEntry, getTrainingEntries, saveTrainingEntry } from '../../ducks/training';

export default connect(
  (state, props) => ({
    trainingEntry: state.training.get('trainingEntry'),
  }),
  dispatch => bindActionCreators({
    getTrainingEntry,
    getTrainingEntries,
    saveTrainingEntry,
  }, dispatch),
)(Wrapped);
