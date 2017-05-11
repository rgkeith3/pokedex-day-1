import { values } from 'lodash';

export const selectAllPokemon= (state) => {
  return values(state.pokemon);
};

export const selectPokemonItem = ({ pokemonDetail }, itemId) => {
  return pokemonDetail.items.find( item => item.id === parseInt(itemId)) || {};
};
