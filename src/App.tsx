import { useMemo, useState } from 'react'
import { getPokemonList } from './services/api/pokeApi'
import { Pokemon } from './models/pokemon'
import PokemonList from './components/PokemonList'

function App() {
  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  const getGenerationList = useMemo(() => getPokemonList('pokemon/', count).then(
    (response) => {
      if(response.status === 200) {
        setPokemons(response.data.results);
      }
      // Show error in other case
    }
  ), [count]);  

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
            setCount((count) => count + 1);
            getGenerationList;
          }
        }>
          count is {count}
        </button>
      </div>
      <PokemonList data={pokemons}></PokemonList>
    </>
  )
}

export default App
