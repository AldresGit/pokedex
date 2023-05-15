export const getPokemonIdFromURL = (url: string): string => {
    const splitURL = url.split('/');
    return splitURL[splitURL.length - 2 ];
}

export const getPokemonSpriteFromURL = (url: string): string => {
    const id = getPokemonIdFromURL(url);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

export const capitalizeName = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1)
}
