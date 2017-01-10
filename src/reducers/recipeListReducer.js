const initStateRecipeList = {
  recipeList:[],
  recipeCount: 0,
  recipePage: 0
}

const recipeListReducer = (state=initStateRecipeList, action) => {
  	switch (action.type){
  	case 'RECEIVE_RECIPES':
			return {
        ...state,
        recipeList: [...state.recipeList, ...action.payload.data.data.recipes],
        recipeCount: state.recipeCount + action.payload.data.data.count
      }
      case 'CLEAR_PAGE_NUMBER':
  			return {
          ...state,
          recipePage: 0
        }
      case 'CLEAR_SEARCH_IN_STORE':
  			return {
          ...state,
          recipeList:[],
          recipeCount: 0,
          recipePage: 0
        }
      case 'INCREM_PAGE_NUMBER':
  			return {
          ...state,
          recipePage: state.recipePage + 1
        }

    default: return state;
  }}

export default recipeListReducer;
