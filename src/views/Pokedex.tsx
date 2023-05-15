import { FC, useMemo, useState } from "react";
import { Pokemon } from "../models/pokemon";
import { getPokemonListQuery } from "../services/api/pokeApi";
import PokemonList from "../components/PokemonList";
import PokemonDetailModal from "../components/PokemonDetailModal/PokemonDetailModal";


const Pokedex: FC = () => {
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [previousDisabled, setPreviousDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(true);

  const [pokemonDetailId, setPokemonDetailId] = useState('');
  const [modalDetailOpen, setModalDetailOpen] = useState(false);

  const handleOpenModal = (pokemonId: string) => {
    setPokemonDetailId(pokemonId);
    setModalDetailOpen(true);
  }
  const handleCloseModal = () => setModalDetailOpen(false);
  
  const getPokemonList = useMemo(() => getPokemonListQuery('pokemon/', page).then(
    (response) => {
      console.log('hola');
      
      if(response.status === 200) {
        setPokemons(response.data.results);
        response.data.next ? setNextDisabled(false) : setNextDisabled(true);
        response.data.previous ? setPreviousDisabled(false) : setPreviousDisabled(true);
      }
      // Show error in other case
    }
  ), [page]);

  getPokemonList;
  
  return (
    <>
      <h1>Pokedex</h1>
      <div className="menu">
        <button disabled={previousDisabled} onClick={() => {
            setPage((page) => page - 1 );
          }
        }>
          Previous
        </button>
        <span className="span-title">Page {page + 1}</span>
        <button disabled={nextDisabled} onClick={() => {
            setPage((page) => page + 1 );
          }
        }>
          Next
        </button>
      </div>
      <PokemonList data={pokemons} openEditModal={(pokemonId: string) => {
        handleOpenModal(pokemonId);
      }}></PokemonList>
      <PokemonDetailModal isOpen={modalDetailOpen} onClose={handleCloseModal} pokemonId={pokemonDetailId}></PokemonDetailModal>
    </>
  )
};

export default Pokedex;