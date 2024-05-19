import styles from "../styles/Main.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faThreads,
  faSquarePlus,
  faHeart,
  faPaperPlane,
  faComment,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHouse,
  faMagnifyingGlass,
  faSquareThreads,
  faRadiation,
  faBars,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import Posts from "./Posts";

function Main() {
  const [posts, setPosts] = useState([
    {
      user: "Bob56",
      postImage: "meme5.jpeg",
      likes: 12,
      timestamp: "18h",
      description: "UTMB finisher with a time of 32 hours ! Proud of myself !",
    },
    {
      user: "Stefen Philips",
      postImage: "meme1.jpeg",
      likes: 68,
      timestamp: "8h",
      description: "Just Imagine.. lol",
    },
    {
      user: "Ecledianfromearth",
      postImage: "meme4.jpeg",
      likes: 2,
      timestamp: "1h",
      description:
        "Vincent Van Gogh is truly the best artist that ever lived on earth",
    },
    {
      user: "Michael_g",
      postImage: "meme2.jpeg",
      likes: 378,
      timestamp: "5j",
      description: "HELLO THEEEERE",
    },
    {
      user: "Discret_Icon",
      postImage: "meme3.jpeg",
      likes: 96,
      timestamp: "2j",
      description:
        "A quick reminder of this beautiful day in Barcelona with you guys ! ",
    },
  ]);

  const [numberOfLikes, setNumberOfLikes] = useState(12);

  return (
    <div>
      <main className={styles.maincontainer}>
        <div className={styles.header}>
          Pour vous <span className={styles.suivie}>Suivi(e)</span>
        </div>
        <div className={styles.stories}>
          {[...Array(8)].map((_, i) => (
            <div className={styles.story} key={i}>
              <div className={styles.border}>
                <img className={styles.storypic} src="profilpic.png" />
              </div>
              <span className={styles.storyUsername}>Username</span>
            </div>
          ))}
        </div>
        <div className={styles.cardcontainer}>
          {posts.map((post, index) => (
            <Posts
              key={index}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
              description={post.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Main;
