import { connect } from 'react-redux';
import SavedLinksComponent from './savedLinksComponent.js';

const mapStateToProps = (state) => {
  return {
		savedLinks: state.savedLinks.savedLinks.length ? state.savedLinks.savedLinks : [''],
    savedRecipes: state.recipe.savedRecipes.length ? state.recipe.savedRecipes : ['']
  }
}



const SavedLinksContainer = connect(mapStateToProps)(SavedLinksComponent);

export default SavedLinksContainer;
