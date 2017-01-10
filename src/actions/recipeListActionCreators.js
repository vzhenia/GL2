import { request } from '../utils/functions.js';
import { recipeListInit } from '../utils/defaults.js';
import apikey from '../utils/apikey.js';

function getRecipeList(data){
  return {
    type: 'RECEIVE_RECIPES',
    payload: {
      data
    }
  }
}

export function requestRecipeList(ingred1, ingred2, page) {
  return (dispatch) => {
    dispatch({type: 'FETCHING_RECIPES'});
    // eslint-disable-next-line
    request('https://community-food2fork.p.mashape.com/search?key='+`${apikey.apikey1}`+'&page='+`${page}`+'&q='+`${ingred1}`+'+'+`${ingred2}`, {
  		method: "GET",
  		headers: {
  			"X-Mashape-Key": apikey.apikey2,
      	"Accept": "application/json"
  		}
  	}).then((response) => {

      if (!response){
        console.log('And the response is....', response);
        dispatch(getRecipeList(recipeListInit));
      }
      else {
        dispatch(getRecipeList(response))}
      }
      );
  }
}

export function clearPageNumber() {
  return (dispatch) => {
    dispatch({type: 'CLEAR_PAGE_NUMBER'});
  }
}
export function clearSearchInStore() {
  return (dispatch) => {
    dispatch({type: 'CLEAR_SEARCH_IN_STORE'});
  }
}
export function incremPageNumber() {
  return (dispatch) => {
    dispatch({type: 'INCREM_PAGE_NUMBER'});
  }
}
