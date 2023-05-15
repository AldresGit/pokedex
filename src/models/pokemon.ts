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
    abilities: Ability[];
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

interface Ability {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}