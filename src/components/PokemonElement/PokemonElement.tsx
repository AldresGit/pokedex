import { FC } from "react";
import PokemonSprite from "../PokemonSprite/PokemonSprite";

interface PokemonElementProps {
  id: string;
  name: string;
  sprite: string;
}

const PokemonElement: FC<PokemonElementProps> = ({ id, name, sprite }) => {
  
  return (
    <div className="poke-card">
      <h3>{id} - {name}</h3>
      <PokemonSprite sprite={sprite}></PokemonSprite>
    </div>
  )
};

export default PokemonElement;