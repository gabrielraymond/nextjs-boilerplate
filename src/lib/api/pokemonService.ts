import { pokeApiClient } from "@/lib/api/client"

export const fetchPokemonList = async (limit: number = 20, offset: number = 0) => {
    const response = await pokeApiClient.get('/pokemon', {
        params: { limit, offset },
    });
    return response.data;
}

export const fetchPokemonDetails = async (id: string) => {
    const response = await pokeApiClient.get(`/pokemon/${id}`);
    return response.data;
}