import { FC } from "react";
import { Pokemon } from "../models/pokemon";
import { capitalizeName, getPokemonIdFromURL, getPokemonSpriteFromURL } from "../utils/utils";
import PokemonElement from "./PokemonElement/PokemonElement";

interface PokemonListProps {
  data: Pokemon[];
  openEditModal: (pokemonId: string) => void;
}

const PokemonList: FC<PokemonListProps> = ({ data, openEditModal }) => {
  return (
    <main className="poke-list">
      {data.map(pokemon => (
        <PokemonElement key={pokemon.name}
          id={getPokemonIdFromURL(pokemon.url)}
          name={capitalizeName(pokemon.name)}
          sprite={getPokemonSpriteFromURL(pokemon.url)}
          onClick={openEditModal}></PokemonElement>
      ))}
    </main>
  )
};

export default PokemonList;
