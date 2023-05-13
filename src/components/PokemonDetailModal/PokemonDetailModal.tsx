import { FC } from 'react';

interface PokemonDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  pokemonId: string;
}

const PokemonDetailModal: FC<PokemonDetailModalProps> = ({ isOpen, onClose, pokemonId }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h1 className="close" onClick={onClose}>Viva triana - {pokemonId}</h1>
      </div>
    </div>
  );
};

export default PokemonDetailModal;
