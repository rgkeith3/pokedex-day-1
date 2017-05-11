import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon, requestSinglePokemon, receiveSinglePokemon } from "./actions/pokemon_actions";
import configureStore from './store/store';
import { selectAllPokemon, selectPokemonItem } from './reducers/selectors';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  window.selectAllPokemon = selectAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.receiveSinglePokemon = receiveSinglePokemon;
  window.requestSinglePokemon = requestSinglePokemon;
  window.selectPokemonItem = selectPokemonItem;
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
