/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import PokemonDetailModal from './PokemonDetailModal';

describe('PokemonDetailModal Component', () => {
  test('The component is in the document', () => {
    render(<PokemonDetailModal isOpen={false} onClose={() => null} pokemonId={'25'} />);
  });
});
