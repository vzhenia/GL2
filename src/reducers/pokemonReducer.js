const initStatePokemon = {
	pokemonList: []}

  const pokemonReducer = (state=initStatePokemon, action) => {
  	switch (action.type){
		case "RECEIVE_POKEMONS":
			return {...state, pokemonList: [...state.pokemonList, ...action.payload.data.data.results]}
  	case "ADD_POKEMON":
  		return {...state, pokemonList: [...state.pokemonList, action.payload]}
  	default: return state;
  }}

export default pokemonReducer;
