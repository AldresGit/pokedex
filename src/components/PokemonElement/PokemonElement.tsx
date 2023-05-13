import { FC } from "react";
import PokemonSprite from "../PokemonSprite/PokemonSprite";

interface PokemonElementProps {
  id: string;
  name: string;
  sprite: string;
  onClick: (pokemonId: string) => void;
}

const PokemonElement: FC<PokemonElementProps> = ({ id, name, sprite, onClick }) => {
  
  return (
    <div className="poke-card" onClick={() => onClick(id)}>
      <h3>{id} - {name}</h3>
      <PokemonSprite sprite={sprite}></PokemonSprite>
    </div>
  )
};

export default PokemonElement;