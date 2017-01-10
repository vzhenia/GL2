import { connect } from 'react-redux';
import pokemonList from './pokemonList.js';
import { requestPokemonList } from '../../actions/pokemonActionCreators.js';


const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
	   onButClick: () => dispatch(requestPokemonList())
	}}

const pokemonListContainer = connect(mapStateToProps,mapDispatchToProps)(pokemonList);

export default pokemonListContainer;
