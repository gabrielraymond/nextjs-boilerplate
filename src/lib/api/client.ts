import axios from 'axios'

const POKEAPI_BASE_URL = `https://pokeapi.co/api/v2`;

export const axiosClient = axios.create({
    baseURL: POKEAPI_BASE_URL,
    headers: {
        'Content_Type': 'application/json'
    }
})