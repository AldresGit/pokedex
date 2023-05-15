/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import PokemonElement from './PokemonElement';

const sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1008.png';

describe('PokemonElement Component', () => {
  test('The component is in the document', () => {
    render(<PokemonElement id='1008' name='Miraidon' sprite={sprite} onClick={() => null} />);
  });

  test('The component should have the correct name and id', () => {
    render(<PokemonElement id='1008' name='miraidon' sprite={sprite} onClick={() => null} />);

    const title = screen.getByText('1008 - miraidon');
    
    expect(title).toBeInTheDocument();
  });

  test('Should have an image', () => {
    render(<PokemonElement id='1008' name='miraidon' sprite={sprite} onClick={() => null} />);
    const img = screen.getByTestId('sprite');
    expect(img).toBeInTheDocument();
  });
});
