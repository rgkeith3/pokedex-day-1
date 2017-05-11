import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.match.params.id !== newProps.match.params.id) {
      this.props.requestSinglePokemon(newProps.match.params.id);
    }
  }

  render() {
    return (
      <div className="PokemonDetail">
        <h1>{this.props.pokemonDetail.name}</h1>
        <img src={this.props.pokemonDetail.image_url} />
        <ul>
          <li>{this.props.pokemonDetail.poke_type}</li>
          <li>{this.props.pokemonDetail.attack}</li>
          <li>{this.props.pokemonDetail.defense}</li>
          <li>{this.props.pokemonDetail.moves}</li>
        </ul>
      </div>
    );
  }

}

export default PokemonDetail;
