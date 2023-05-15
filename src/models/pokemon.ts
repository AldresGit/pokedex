export interface Pokemon {
    name: string,
    url: string
}

export interface DetailPokemon {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: {
        other: {
            'official-artwork': {
                'front_default': string
            }
        }
    };
    stats: Stat[];
    types: Type[];
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}