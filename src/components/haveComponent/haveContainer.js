import { connect } from 'react-redux';
import HaveComponent from './haveComponent.js';
import { saveHaveStateToStore, saveHaveRequestToStore } from '../../actions/haveActionCreators.js';


const mapStateToProps = (state) => {
  return {
    haveState: state.haveState,
    //haveRequest can be skipped
    haveRequest: state.haveState.haveRequest
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
	   onStateSaveRequest: (data) => {
			 dispatch(saveHaveStateToStore(data))
		 },
     onRequestSaveRequest: (data) => {
			 dispatch(saveHaveRequestToStore(data))
		 }
	}
}


const haveContainer = connect(mapStateToProps,mapDispatchToProps)(HaveComponent);
export default haveContainer;
