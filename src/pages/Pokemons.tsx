import { useState } from "react";
import { Footer, Header } from "../components";

export const Pokemons = () => {
  const [query, setQuery] = useState("BULBASUR");
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <h1>Pokemons</h1>
      </main>
      <Footer />
    </>
  );
};
