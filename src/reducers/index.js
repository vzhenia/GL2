import { combineReducers } from 'redux';

import pokemonReducer from './pokemonReducer.js';
import recipeListReducer from './recipeListReducer.js';
import topRatedListReducer from './topRatedListReducer.js';
import wantReducer from './wantReducer.js';
import haveReducer from './haveReducer.js';
import recipeOneReducer from './recipeOneReducer.js';
import saveLinksReducer from './saveLinksReducer.js';


const Reducers = combineReducers({
	recipeList: recipeListReducer,
	topRatedList: topRatedListReducer,
	wantState: wantReducer,
	haveState: haveReducer,
	recipe: recipeOneReducer,
	savedLinks: saveLinksReducer,
	pokemons: pokemonReducer
})

export default Reducers;
