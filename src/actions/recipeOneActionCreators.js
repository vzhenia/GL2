import { request } from '../utils/functions.js';
import apikey from '../utils/apikey.js';
import { recipeInit } from '../utils/defaults.js';

function getRecipe(data){
  return {
    type: 'LOAD_RECIPE',
    payload: {
      data
    }
  }
}

export function requestRecipe(rIDD, caller) {
  if (caller !== 'mylinks'){
    return (dispatch) => {
      dispatch({type: 'FETCHING_ONE_RECIPE'});
      // eslint-disable-next-line
      request('https://community-food2fork.p.mashape.com/get?key='+`${apikey.apikey1}`+'&rId='+`${rIDD}`, {
        method: "GET",
    		headers: {
    			"X-Mashape-Key": apikey.apikey2,
        	"Accept": "application/json"
    		}
    	}).then((response) => {

        if (!response){
          console.log('And the response for 1 recipe is....', response);
          let i = recipeInit.filter((elt) => elt.recipe_id === rIDD);
          let obj = {data:{recipe: i[0]}}
          dispatch(getRecipe(obj));
        }
        else {
          dispatch(getRecipe(response))}
        });
    }
  }
  else {
    return {
      type: 'CLAIMING_RECIPE_FROM_SAVED',
      payload: {rID_key: rIDD}
    }
  }
}
