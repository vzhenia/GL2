import { connect } from 'react-redux';
import recipeListComp from './recipeList.js';
import { requestRecipeList, clearPageNumber, incremPageNumber, clearSearchInStore} from '../../actions/recipeListActionCreators.js';

const mapStateToProps = (state, ownProps) => {
  return {
		recipeList: state.recipeList.recipeList,
    recipeCount: state.recipeList.recipeCount,
    queryFromWant: state.wantState.wantRequest,
    queryFromHave: state.haveState.haveRequest[0],
    haveList: state.haveState.haveRequest[1],
    recipePage: state.recipeList.recipePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     loadRecipes: (a,b,c) => dispatch(requestRecipeList(a,b,c)),
     clearPage: () => dispatch(clearPageNumber()),
     clearSearch: () => dispatch(clearSearchInStore()),
     incremPage: () => dispatch(incremPageNumber())
	}
}

const RecipeListContainer = connect(mapStateToProps,mapDispatchToProps)(recipeListComp);

export default RecipeListContainer;
