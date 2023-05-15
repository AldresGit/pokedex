import axios from 'axios';
import { PaginatedResponse } from '../../models/api';
import { DetailPokemon, Pokemon } from '../../models/pokemon';

interface Params {
    baseUrl: string,
    headers: { Authorization?: string }
    method: string,
}

const getConfig: Params = {
    baseUrl: 'https://pokeapi.co/api/v2',
    headers: {
        'Authorization': '',
    },
    method: 'get'
}

const PAGE_SIZE = 20;

export const getPokemonListQuery = async (url: string, page: number): Promise<{data: PaginatedResponse<Pokemon[]>, status: number}> => {
    return await axios({
        ...getConfig,
        url: `${getConfig.baseUrl}/${url}?offset=${page*PAGE_SIZE}&limit=20`,
    }).then((response) => {
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) => {
        console.log(error);
        return {
            status: error.status,
            data: error.response
        }
    })
}

export const getPokemonDetailQuery = async (url: string, id: string): Promise<{data: DetailPokemon, status: number}> => {
    return await axios({
        ...getConfig,
        url: `${getConfig.baseUrl}/${url}${id}/`,
    }).then((response) => {
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) => {
        console.log(error);
        return {
            status: error.status,
            data: error.response
        }
    })
}
