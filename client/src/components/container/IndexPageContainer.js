import { connect } from 'react-redux';
import IndexPage from '../IndexPage';

export default connect(
  state => ({
    persons: state.person.get('persons'),
    trainingEntries: state.training.get('trainingEntries'),
  })
)(IndexPage);
