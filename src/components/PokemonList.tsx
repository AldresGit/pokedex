import { FC } from "react";
import { Pokemon } from "../models/pokemon";
import { getPokemonIdFromURL } from "../utils/utils";

interface PokemonListProps {
  data: Pokemon[];
}

const PokemonList: FC<PokemonListProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Número</th>
          <th>Nombre</th>
          <th>Sprite</th>
        </tr>
      </thead>
      <tbody>
        {data.map(pokemon => (
          <tr key={pokemon.name} className="separacion">
            <td>{getPokemonIdFromURL(pokemon.url)}</td>
            <td>{pokemon.name}</td>
            {/* Crear componente sprite */}
            <td><img src="" alt="" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default PokemonList;
