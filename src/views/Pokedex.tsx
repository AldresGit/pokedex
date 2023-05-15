import { FC, useMemo, useState } from "react";
import { Pokemon } from "../models/pokemon";
import { getPokemonListQuery } from "../services/api/pokeApi";
import PokemonList from "../components/PokemonList";
import PokemonDetailModal from "../components/PokemonDetailModal/PokemonDetailModal";
import PaginatedMenu from "../components/PaginatedMenu/PaginatedMenu";
import pokeballIcon from "../assets/pokeball.png";


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
      <header><img src={pokeballIcon} alt="pokeball" /></header>
      <PaginatedMenu
        page={page}
        leftButtonDisabled={previousDisabled}
        leftButtonClick={() => {
            setPage((page) => page - 1 );
          }
        }
        rightButtonDisabled={nextDisabled}
        rightButtonClick={() => {
            setPage((page) => page + 1 );
          }
        } />
      <PokemonList data={pokemons} openEditModal={(pokemonId: string) => {
        handleOpenModal(pokemonId);
      }} />
      <PokemonDetailModal isOpen={modalDetailOpen} onClose={handleCloseModal} pokemonId={pokemonDetailId} />
    </>
  )
};

export default Pokedex;