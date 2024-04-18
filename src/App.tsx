import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";

const App = () => {
  return (
    <>
      <Header />
      {/* <h1>Pokemon</h1> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
