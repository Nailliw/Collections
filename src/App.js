import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Characters from './Components/Characters';
import FavoriteCharacters from './Components/FavoriteCharacters';
import HeaderLinks from './Components/HeaderLinks';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout } from 'antd';
const { Header, Content } = Layout;
const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon?limit=150';
const STARWARS_URL = 'https://akabab.github.io/starwars-api/api/all.json';

function App() {
  const [characterAPI, setCharacterAPI] = useState({
    characterList: [],
    nextUrl: 'https://rickandmortyapi.com/api/character/',
  });
  const { characterList, nextUrl } = characterAPI;
  const [pokemonChar, setPokemonChar] = useState([]);
  const [starwarsChar, setStarwarsChar] = useState([]);

  const getCharacters = () => {
    if (nextUrl) {
      fetch(nextUrl)
        .then((res) => res.json())
        .then((body) => {
          setCharacterAPI({
            characterList: [...characterList, ...body.results],
            nextUrl: body.info.next,
          });
        });
    }
  };

  const pokemonList = () => {
    axios.get(POKEMON_URL).then((body) => {
      setPokemonChar(body.data.results);
    });
  };
  const starwarsList = () => {
    axios.get(STARWARS_URL).then((body) => {
      setStarwarsChar(body.data);
    });
  };

  const [favorites, setFavorites] = useState(() => {
    const favoriteList = localStorage.getItem('favoriteList');
    if (favoriteList) {
      return JSON.parse(favoriteList);
    }
    return [];
  });

  useEffect(getCharacters, [nextUrl, characterList]);
  useEffect(pokemonList, []);
  useEffect(starwarsList, []);
  return (
    <Layout className="container">
      <Header>
        <HeaderLinks />
      </Header>
      <Content>
        <div className="container-content">
          <Switch>
            <Route exact path="/">
              <Characters
                characters={characterList}
                favorites={favorites}
                setFavorites={setFavorites}
              ></Characters>
            </Route>
            <Route exact path="/pokemon" className="pokemon">
              <Characters
                characters={pokemonChar}
                favorites={favorites}
                setFavorites={setFavorites}
              ></Characters>
            </Route>
            <Route exact path="/starwars">
              <Characters
                characters={starwarsChar}
                favorites={favorites}
                setFavorites={setFavorites}
              ></Characters>
            </Route>
            <Route path="/favorite">
              <FavoriteCharacters
                favorites={favorites}
                setFavorites={setFavorites}
              ></FavoriteCharacters>
            </Route>
          </Switch>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
