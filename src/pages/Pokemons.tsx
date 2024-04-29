import { useEffect, useState } from "react";
import { Footer, Header } from "../components";
import { Link } from "react-router-dom";
import { fetchPokemons } from "../services";
import { Pokemon } from "../types/types";

export const Pokemons = () => {
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        const allPokemons = await fetchPokemons();
        console.log(allPokemons);
        setPokemons(allPokemons);
      } catch {
        console.log("Error fetching pokemones: ", Error);
      }
    };
    fetchAllPokemons();
  }, []);

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav>
          {pokemons?.slice(0, 151).map((pokemon) => (
            <Link
              key={pokemon.id}
              className="pokemones"
              to={`/pokemons/${pokemon.name.toLowerCase()}`}
            >
              <img
                className="pokemon"
                src={pokemon.imgSrc}
                alt={pokemon.name}
              />
              <div className="div-name-id">
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
              </div>
            </Link>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
};
