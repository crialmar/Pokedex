import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import pokebola from "../assets/pokebola.png";
import juego from "../assets/juego.png";
import ubicacion from "../assets/ubicacion.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.footerLink} to="/pokemons">
        <img
          src={pokebola}
          alt="Pokemon-pokebola"
          className={styles.footerIcon}
        />{" "}
        Pokemons
      </Link>
      <Link className={styles.footerLink} to="/items">
        <img src={juego} alt="Item-Pokemon" className={styles.footerIcon} />{" "}
        Items
      </Link>
      <Link className={styles.footerLink} to="/map">
        <img
          src={ubicacion}
          alt="Ubicación-pokemons"
          className={styles.footerIcon}
        />{" "}
        Mapa
      </Link>
    </footer>
  );
};
