import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    };
    this.hover = this.hover.bind(this);
    this.unhover = this.unhover.bind(this);
  }

  hover(e) {
    e.preventDefault();
    this.setState({
      hover: true
    });
  }

  unhover(e) {
    e.preventDefault();
    this.setState({
      hover: false
    });
  }

  render() {
    let hoverClass = this.state.hover ? "animated infinite bounce" : "";
    return (
      <li onMouseEnter={this.hover} onMouseLeave={this.unhover} className={this.props.pokemon.poke_type} >
        <Link to={`/pokemon/${this.props.pokemon.id}`}>
          {this.props.pokemon.id}<img className={hoverClass} src={this.props.pokemon.image_url} />{this.props.pokemon.name}
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
