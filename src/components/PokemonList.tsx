import { FC } from "react";
import { Pokemon } from "../models/pokemon";
import { getPokemonIdFromURL, getPokemonSpriteFromURL } from "../utils/utils";
import PokemonElement from "./PokemonElement/PokemonElement";

interface PokemonListProps {
  data: Pokemon[];
}

const PokemonList: FC<PokemonListProps> = ({ data }) => {
  return (
    <main className="poke-list">
      {data.map(pokemon => (
        <PokemonElement key={pokemon.name} id={getPokemonIdFromURL(pokemon.url)} name={pokemon.name} sprite={getPokemonSpriteFromURL(pokemon.url)}></PokemonElement>
      ))}
    </main>
  )
};

export default PokemonList;
