/* eslint-disable @typescript-eslint/no-explicit-any */
// https://unpkg.com/pokemons@1.1.0/pokemons.json

import { Pokemon } from "../types/types";

export async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await fetch(
    "https://unpkg.com/pokemons@1.1.0/pokemons.json",
  );

  if (!response.ok) {
    throw new Error("Couldn't catch them all");
  }

  const results = await response.json();

  const pokemons = results.results.map((pokemon: any) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    img: `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`,
  }));
  console.log(pokemons, "tamo aqui");
  const uniquePokemons = pokemons.filter(
    (pokemon: any, index: number) =>
      pokemons.findIndex((other: any) => other.id === pokemon.id) === index,
  );

  return uniquePokemons;
}
