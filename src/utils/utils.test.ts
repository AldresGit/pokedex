import {describe, expect, test} from '@jest/globals';
import { capitalizeName, getPokemonIdFromURL, getPokemonSpriteFromURL } from './utils';

describe('Test for Utils.ts', () => {

  describe('Test getPokemonIdFromURL', () => {
    test('Must return a certain string', () => {
      expect(getPokemonIdFromURL('https://pokemon/25/')).toBe('25');
    })
  });

  describe('Test getPokemonSpriteFromURL', () => {
    test('Must return a valid url', () => {
      expect(getPokemonSpriteFromURL('https://pokemon/25/')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png');
    })
  });

  describe('Test capitalizeName', () => {
    test('Must return the name capitalized', () => {
      expect(capitalizeName('pikachu')).toBe('Pikachu');
    })
  });
});