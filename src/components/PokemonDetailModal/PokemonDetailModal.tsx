import { FC, useMemo, useState } from 'react';
import PokemonSprite from '../PokemonSprite/PokemonSprite';
import { DetailPokemon } from '../../models/pokemon';
import { getPokemonDetailQuery } from '../../services/api/pokeApi';
import { CircleLoader } from 'react-spinners';
import { capitalizeName } from '../../utils/utils';

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
          // Here you would manage the errors from the API
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
        <section>
          <h1>{pokemonDetails.id} - {capitalizeName(pokemonDetails.name)}</h1>
          <div className="pokemon-detail-row">
            <PokemonSprite large={true} sprite={pokemonDetails.sprites.other["official-artwork"].front_default} />
            <div className="pokemon-detail-column">
              <span>Type</span>
              <div className="type-row">
                {pokemonDetails.types.map(type => (
                  <h4 key={type.type.name}>{capitalizeName(type.type.name)}</h4>
                ))}
              </div>
              <span>Height</span>
              <h2>{pokemonDetails.height} m</h2>
              <span>Weight</span>
              <h2>{pokemonDetails.weight} kg</h2>
            </div>
            <div className="pokemon-detail-column">
              <span>Abilities</span>
              <div className="stat-column">
                {pokemonDetails.abilities.map(ability => (
                  ability.is_hidden ? 
                    <h3 key={ability.ability.name} className='ability-hidden'>{capitalizeName(ability.ability.name)} (hidden)</h3>
                    : <h3 key={ability.ability.name}>{capitalizeName(ability.ability.name)}</h3>
                ))}
                <span>Stats</span>
                {pokemonDetails.stats.map(stat => (
                  <h5 key={stat.stat.name}> {stat.stat.name}: {stat.base_stat}</h5>
                ))}
              </div>
            </div>
          </div>
        </section>
        : <div>
          <CircleLoader color="#C982FF" loading={true} />
        </div> }
      </div>
    </div>
  );
};

export default PokemonDetailModal;
