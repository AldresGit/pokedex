import { FC } from "react";

interface PokemonSpriteProps {
  sprite: string;
  large?: boolean;
}

const PokemonSprite: FC<PokemonSpriteProps> = ({ sprite, large }) => {
  
  return (
    <img src={sprite} alt="sprite" className={ large ? 'large-icon' : 'icon'} data-testid='sprite' />
  )
};

export default PokemonSprite;