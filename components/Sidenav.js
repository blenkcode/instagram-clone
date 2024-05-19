import styles from "../styles/Sidenav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faThreads,
  faSquarePlus,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHouse,
  faMagnifyingGlass,
  faSquareThreads,
  faRadiation,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Sidenav() {
  let iconStyle = { style: "regular" };
  return (
    <div>
      <main className={styles.maincontainer}>
        <div className={styles.gridupper}>
          <img className={styles.logo} src="logo.png" />
          <div className={styles.iconsmaincontainer}>
            {" "}
            <button className={styles.iconcontainer}>
              {" "}
              <FontAwesomeIcon
                style={iconStyle}
                className={styles.icons}
                icon={faHouse}
              />{" "}
              Acceuil
            </button>
            <button className={styles.iconcontainer}>
              <FontAwesomeIcon
                className={styles.icons}
                icon={faMagnifyingGlass}
              />
              Recherche
            </button>
            <button className={styles.iconcontainer}>
              <FontAwesomeIcon className={styles.icons} icon={faCompass} />
              Découvrir
            </button>
            <button className={styles.iconcontainer}>
              <FontAwesomeIcon className={styles.icons} icon={faRadiation} />
              Reels
            </button>
            <button className={styles.iconcontainer}>
              <FontAwesomeIcon className={styles.icons} icon={faPaperPlane} />
              Messages
            </button>
            <button className={styles.iconcontainer}>
              <FontAwesomeIcon className={styles.icons} icon={faHeart} />
              Notifications
            </button>
            <button className={styles.iconcontainer}>
              <FontAwesomeIcon className={styles.icons} icon={faSquarePlus} />
              Créer
            </button>
            <button className={styles.iconcontainer}>
              <img className={styles.profilpic} src="profilpic.png" /> Profil
            </button>
          </div>
        </div>
        <div className={styles.gridmid}></div>
        <div className={styles.gridlower}>
          <button className={styles.iconcontainer}>
            <FontAwesomeIcon className={styles.icons} icon={faRadiation} />
            Threads
          </button>
          <button className={styles.iconcontainer}>
            <FontAwesomeIcon className={styles.icons} icon={faBars} />
            Plus
          </button>
          s
        </div>
      </main>
    </div>
  );
}

export default Sidenav;
