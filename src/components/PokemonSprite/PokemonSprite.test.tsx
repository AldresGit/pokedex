/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import PokemonSprite from './PokemonSprite';

const sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1008.png';

describe('PokemonSprite Component', () => {
  test('The component is in the document', () => {
    render(<PokemonSprite sprite={sprite} />);
  });

  test('Should have an image', () => {
    render(<PokemonSprite sprite={sprite} />);
    const img = screen.getByTestId('sprite');
    expect(img).toBeInTheDocument();
  });

  test('Should be normal size with the prop on true', () => {
    render(<PokemonSprite sprite={sprite} />);
    const img = screen.getByTestId('sprite');
    expect(img).toHaveClass('icon');
  });

  test('Should be large size with the prop on true', () => {
    render(<PokemonSprite sprite={sprite} large={true} />);
    const img = screen.getByTestId('sprite');
    expect(img).toHaveClass('large-icon');
  });
});
