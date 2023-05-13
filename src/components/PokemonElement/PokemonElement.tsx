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
      <h3>{name}</h3>
      <h4>{id}</h4>
      <PokemonSprite sprite={sprite}></PokemonSprite>
    </div>
  )
};

export default PokemonElement;