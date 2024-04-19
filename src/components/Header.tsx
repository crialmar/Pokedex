import styles from "./Header.module.css";

interface HeaderProps {
  query: string;
  setQuery: (query: string) => void;
}

export const Header = ({ query, setQuery }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <input
        className={styles.input}
        placeholder="Busca tu pokemon"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </header>
  );
};
