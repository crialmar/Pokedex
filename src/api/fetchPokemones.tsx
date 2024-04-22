// https://unpkg.com/pokemons@1.1.0/pokemons.json

export async function fetchPokemons() {
  const response = await fetch(
    "https://unpkg.com/pokemons@1.1.0/pokemons.json",
  );

  if (!response.ok) {
    throw new Error("Couldn't catch them all");
  }

  const results = await response.json();

  const pokemons = results.map((pokemon: any) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    img: `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`,
  }));
}
