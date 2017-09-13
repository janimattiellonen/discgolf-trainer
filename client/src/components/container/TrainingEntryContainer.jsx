import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from './pages/TrainingEntryPage';
import { getTrainingSession, getTrainingSessions } from '../../ducks/training';


function isFunction(functionToCheck) {
 var getType = {};
 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

console.log("what is? " + isFunction(getTrainingSessions));
getTrainingSessions();
// client/src/ducks
// client/src/components/container/TrainingEntryContainer.jsx
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
