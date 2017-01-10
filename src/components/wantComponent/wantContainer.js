import { connect } from 'react-redux';
import WantComponent from './wantComponent.js';
import { saveWantStateToStore, saveWantRequestToStore } from '../../actions/wantActionCreators.js';


const mapStateToProps = (state) => {
  return {
    wantState: state.wantState,
    wantRequest: state.wantRequest
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
	   onStateSaveRequest: (data) => {
			 dispatch(saveWantStateToStore(data))
		 },
     onRequestSaveRequest: (data) => {
			 dispatch(saveWantRequestToStore(data))
		 }
	}
}


const wantContainer = connect(mapStateToProps,mapDispatchToProps)(WantComponent);
export default wantContainer;
