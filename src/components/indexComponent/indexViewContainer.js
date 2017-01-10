import { connect } from 'react-redux';
import indexView from './indexView.js';
import { requestTopRatedList } from '../../actions/topRatedListActionCreators.js';;


const mapStateToProps = (state) => {
  return {
    topRatedList: state.topRatedList.topRatedList,
    topRatedCount: state.topRatedList.topRatedCount,
    topRatedPage: state.topRatedList.topRatedPage
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
     loadTopRated: (p) => dispatch(requestTopRatedList(p))
	}}

const topRatedListContainer = connect(mapStateToProps,mapDispatchToProps)(indexView);

export default topRatedListContainer;
