"use client";
import { usePokemonList } from "@/hooks/usePokemon";
import Link from "next/link";

export const PokemonList = () => {
  const { data, isLoading, error } = usePokemonList();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {data?.results.map((pokemon) => (
          <li key={pokemon.name}>
            <Link href={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
