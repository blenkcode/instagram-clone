import styles from "../styles/Home.module.css";
import Sidenav from "./Sidenav";
import Main from "./Main";

function Home() {
  return (
    <div>
      <main className={styles.maincontainer}>
        <div className={styles.navbar}>
          <Sidenav />
        </div>
        <div className={styles.main}>
          <Main />
        </div>
        <div className={styles.suggestion}>0</div>
      </main>
    </div>
  );
}

export default Home;
