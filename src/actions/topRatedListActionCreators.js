import { request } from '../utils/functions.js';
import apikey from '../utils/apikey.js';


function receiveTopRatedList(data){
  return {
    type: 'RECEIVE_TOP_RATED',
    payload: {
      data
    }
  }
}

export function requestTopRatedList(page) {
  return (dispatch) => {
    dispatch({type: 'FETCHING_TOP_RATED'});
    // eslint-disable-next-line
    request('https://community-food2fork.p.mashape.com/search?key='+`${apikey.apikey1}`+'&page='+`${page}`, {
  		method: "GET",
  		headers: {
  			"X-Mashape-Key": apikey.apikey2,
      	"Accept": "application/json"
  		}
  	}).then((response) => dispatch(receiveTopRatedList(response)))
  }
}

export function clearTopRatedPageNumber() {
  return (dispatch) => {
    dispatch({type: 'CLEAR_TOPRATED_PAGE_NUMBER'});
  }
}

export function incremTopRatedPageNumber() {
  return (dispatch) => {
    dispatch({type: 'INCREM_TOPRATED_PAGE_NUMBER'});
  }
}
