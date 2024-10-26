import styles from "./page.module.css";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <nav>
            <a href="">Home</a>
            <a href="">Contacts</a>
            <a href="">Info</a>
        </nav>
      </header>
      <Carousel />
    </main>
  );
}
