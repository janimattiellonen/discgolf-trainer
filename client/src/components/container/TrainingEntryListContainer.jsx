import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from './pages/TrainingEntryListPage';
import { getTrainingEntries } from '../../ducks/training';

export default connect(
  (state, props) => ({
    trainingEntries: state.training.get('trainingEntries'),
  }),
  dispatch => bindActionCreators({
    getTrainingEntries,
  }, dispatch),
)(Wrapped);
