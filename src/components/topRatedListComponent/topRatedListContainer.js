import { connect } from 'react-redux';
import topRatedListComponent from './topRatedList.js';
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

const TopRatedListContainer = connect(mapStateToProps,mapDispatchToProps)(topRatedListComponent);


export default TopRatedListContainer;
