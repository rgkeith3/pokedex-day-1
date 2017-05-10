import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonList = pokemon.map(poke => (
      <li key={poke.id}>
        {poke.id}
        <img src={poke.image_url} />
        {poke.name}
      </li>));
    return (
      <div className="PokemonIndex">
        <ul>
          {pokemonList}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
