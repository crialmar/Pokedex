import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Items, Pokemon, Pokemons } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Pokemon />,
      },
      {
        path: "/pokemon",
        element: <Pokemon />,
      },
      {
        path: "/pokemons/:name",
        element: <Pokemons />,
      },
      {
        path: "/items",
        element: <Items />,
      },
    ],
  },
]);
