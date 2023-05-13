import axios from 'axios';
import { PaginatedResponse } from '../../models/api';
import { Pokemon } from '../../models/pokemon';

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

export const getPokemonList = async (url: string, data: number): Promise<PaginatedResponse<Pokemon>> => {
    console.log('La data que le viene --> ', data);
    
    return await axios({
        ...getConfig,
        url: `${getConfig.baseUrl}/${url}`,
    }).then((response) => {
        console.log('La respuesta de la api', response);
        // return {
        //     status: response.status,
        //     data: response.data
        // }
        return response.data;
    }).catch((error) => {
        console.log(error);
        return {
            status: error.status,
            data: error.response
        }
    })
}
