import { request } from '../utils/functions.js';

export function addPokemon(pokemon) {
  return {
    type: 'ADD_POKEMON',
    pokemon
  }
}

export function removePokemon(id) {
  return {
    type: 'REMOVE_POKEMON',
    id
  }
}

function receivePokemonList(data){
  return {
    type: 'RECEIVE_POKEMONS',
    payload: {
      data
    }
  }
}

export function requestPokemonList() {
  return (dispatch) => {
    dispatch({type: 'FETCHING_POKEMONS'});
    request('http://pokeapi.co/api/v2/pokemon').then((response) => dispatch(receivePokemonList(response)))
  }
}
