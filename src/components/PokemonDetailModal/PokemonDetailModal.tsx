import { FC, useMemo, useState } from 'react';
import PokemonSprite from '../PokemonSprite/PokemonSprite';
import { DetailPokemon } from '../../models/pokemon';
import { getPokemonDetailQuery } from '../../services/api/pokeApi';

interface PokemonDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  pokemonId: string;
}

const PokemonDetailModal: FC<PokemonDetailModalProps> = ({ isOpen, onClose, pokemonId }) => {
  const [pokemonDetails, setPokemonDetails] = useState<DetailPokemon | null>(null);

  const getPokemonDetail = useMemo(() => {
    if(pokemonId === '') {
      return null;
    } else {
      setPokemonDetails(null);
      return getPokemonDetailQuery('pokemon/', pokemonId).then(
        (response) => {
          if(response.status === 200) {
            setPokemonDetails(response.data);
          }
        }
      )
    }
  }, [pokemonId]);

  getPokemonDetail;

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        { pokemonDetails ? 
        <div>
          <h1>{pokemonDetails.name}</h1>
          <PokemonSprite large={true} sprite={pokemonDetails.sprites.other['official-artwork'].front_default} />
          <span>Height - {pokemonDetails.height}m</span>
          <span>Weight - {pokemonDetails.weight}kg</span>
        </div>
        
        : <h1>Loading...</h1> }
      </div>
    </div>
  );
};

export default PokemonDetailModal;
