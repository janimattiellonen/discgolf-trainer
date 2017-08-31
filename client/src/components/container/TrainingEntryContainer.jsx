import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from './pages/TrainingEntryPage';

export default connect(
  state => ({

  }),
  dispatch => bindActionCreators({

  }, dispatch),
)(Wrapped);
