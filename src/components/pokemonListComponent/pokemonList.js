import React from 'react';

class pokemonList extends React.Component {
  render() {
  	const { pokemonList } = this.props.pokemons;
    return (
	<div>
	  <button onClick={this.props.onButClick}>Dispatch Pokemons</button>
	  <ul>{pokemonList.map((elt, id)=> <li key={`pokemon-${id}`}>{elt.name}</li>)}</ul>
    </div>
	)
  }
}

export default pokemonList;
