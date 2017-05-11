import React from 'react';
import { Link, Route } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';

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
    if (this.props.pokemonDetail.items) {
      const items = this.props.pokemonDetail.items.map( item => {
        return (
          <Link key={item.id} to={`/pokemon/${this.props.pokemonDetail.id}/items/${item.id}`}>
            <img src={item.image_url} />
          </Link>
        );
      });
      return (
        <div className={"PokemonDetail " + this.props.pokemonDetail.poke_type}>
          <h1>{this.props.pokemonDetail.name}</h1>
          <img src={this.props.pokemonDetail.image_url} />
          <ul>
            <li>Type: {this.props.pokemonDetail.poke_type}</li>
            <li>Attack: {this.props.pokemonDetail.attack}</li>
            <li>Defense: {this.props.pokemonDetail.defense}</li>
            <li>Moves: {this.props.pokemonDetail.moves.join(" ")}</li>
          </ul>
          <div className="PokemonItems">
            <h2>Items:</h2>
            <div>
              {items}
            </div>
          </div>
          <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
        </div>
      );
    } else {
      return (
      <div></div>
      );
    }
  }

}

export default PokemonDetail;
