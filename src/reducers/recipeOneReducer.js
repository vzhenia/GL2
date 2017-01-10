const initStateRecipe = {
  recipe: {
      "publisher": "",
      "f2f_url": "",
      "ingredients": ['','',''],
      "source_url": "",
      "recipe_id": "",
      "image_url": "",
      "social_rank": 0,
      "publisher_url": "",
      "title": ""
  },
  savedRecipes: [],
  savedRecipesID: []
}

const recipeOneReducer = (state=initStateRecipe, action) => {
  	switch (action.type){
  	case 'LOAD_RECIPE':
			return {
        ...state,
        recipe: action.payload.data.data.recipe,
        savedRecipes: [...state.savedRecipes, action.payload.data.data.recipe],
        savedRecipesID: [...state.savedRecipesID, action.payload.data.data.recipe.recipe_id]
      }
    case 'CLAIMING_RECIPE_FROM_SAVED':
      if (state.savedRecipes.length){
        let recipeClaimed = state.savedRecipes.filter((elt) => elt.recipe_id === action.payload.rID_key)
        return {
          ...state,
          recipe: recipeClaimed[0]
        }
      }
    // eslint-disable-next-line
    default: return state;
  }
}

export default recipeOneReducer;
