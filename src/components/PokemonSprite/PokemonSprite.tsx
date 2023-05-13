import { FC } from "react";

interface PokemonSpriteProps {
  sprite: string;
  large?: boolean;
}

const PokemonSprite: FC<PokemonSpriteProps> = ({ sprite, large }) => {
  
  return (
    <img src={sprite} alt="" className={ large ? 'large-icon' : 'icon'} />
  )
};

export default PokemonSprite;