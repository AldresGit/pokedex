import { FC, useMemo, useState } from "react";
import { Pokemon } from "../models/pokemon";
import { getPokemonListQuery } from "../services/api/pokeApi";
import PokemonList from "../components/PokemonList";


const Pokedex: FC = () => {
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [previousDisabled, setPreviousDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(true);
  
  const getPokemonList = useMemo(() => getPokemonListQuery('pokemon/', page).then(
    (response) => {
      if(response.status === 200) {
        setPokemons(response.data.results);
        response.data.next ? setNextDisabled(false) : setNextDisabled(true);
        response.data.previous ? setPreviousDisabled(false) : setPreviousDisabled(true);
      }
      // Show error in other case
    }
  ), [page]);
  
  return (
    <>
      <h1>Pokedex</h1>
      <div className="menu">
        <button disabled={previousDisabled} onClick={() => {
            setPage((page) => page - 1 );
            getPokemonList;
          }
        }>
          Previous
        </button>
        <span className="span-title">Page {page + 1}</span>
        <button disabled={nextDisabled} onClick={() => {
            setPage((page) => page + 1 );
            getPokemonList;
          }
        }>
          Next
        </button>
      </div>
      <PokemonList data={pokemons}></PokemonList>
    </>
  )
};

export default Pokedex;