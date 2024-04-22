import { useState } from "react";
import { Footer, Header } from "../components";
import { Link } from "react-router-dom";

export const Pokemons = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav>
          <Link to="/"></Link> //todo
        </nav>
      </main>
      <Footer />
    </>
  );
};
