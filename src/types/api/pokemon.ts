export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  results: Pokemon[];
  count: number;
};

export type PokemonDetails = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
};
