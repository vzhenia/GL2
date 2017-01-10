import { connect } from 'react-redux';
import { requestRecipe } from '../../actions/recipeOneActionCreators.js';
import { saveLinksToStore } from '../../actions/saveLinksActionCreators.js';


import RecipeDisplayComponent from './recipe.js';

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe.recipe,
    haveState: state.haveState,
    savedLinks: state.savedLinks.savedLinks,
    savedRecipes: state.recipe.savedRecipes,
    savedRecipesID: state.recipe.savedRecipesID
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadOneRecipe: (u,c) => dispatch(requestRecipe(u,c)),
    saveLinksToStore: (l) => dispatch(saveLinksToStore(l))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDisplayComponent);
