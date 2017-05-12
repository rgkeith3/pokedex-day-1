import React from 'react';
import { Route } from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonList = pokemon.map(poke => <PokemonIndexItem
                                              key={poke.id}
                                              pokemon={poke}/>);
    return (
      <div className="PokemonIndex">
        <ul className ="PokemonList">
          {pokemonList}
        </ul>
        <Route path="/pokemon/:id" component={ PokemonDetailContainer } />
      </div>
    );
  }
}

export default PokemonIndex;
