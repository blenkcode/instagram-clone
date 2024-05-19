import styles from "../styles/Main.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartRegular,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as faHeartSolid,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef } from "react";

function Posts({ user, timestamp, postImage, likes, description }) {
  const [isliked, setIsliked] = useState(false);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomNumber = getRandomInt(1, 45);
  const [numberOfLikes, setNumberOfLikes] = useState(randomNumber);

  const commentInputRef = useRef(null);

  const [commentInput, setCommentInput] = useState("");

  const handleLike = () => {
    if (isliked === false) {
      setIsliked(true);
      setNumberOfLikes(numberOfLikes + 1);
    } else {
      setIsliked(false);
      setNumberOfLikes(numberOfLikes - 1);
    }
  };

  const handleCommentClick = () => {
    if (commentInputRef.current) {
      commentInputRef.current.focus(); // Focaliser le champ de saisie
    }
  };

  let iconStyle = {};
  if (isliked === true) {
    iconStyle = { color: "red" };
  } else {
    iconStyle = { color: "white" };
  }
  const handleCommentChange = (event) => {
    setCommentInput(event.target.value);
  };

  return (
    <div className={styles.cards}>
      <div className={styles.cardsinfos}>
        <img
          className={styles.cardsprofilpic}
          src="profilpic.png"
          alt="Profile"
        />
        <span className={styles.cardsusername}>{user}</span>
        <span className={styles.cardsdate}>{timestamp}</span>
        <FontAwesomeIcon className={styles.dotsicons} icon={faEllipsis} />
      </div>
      <div className={styles.cardscontent}>
        <img className={styles.cardsimg} src={postImage} alt="Post" />
      </div>
      <div className={styles.cardssocials}>
        <FontAwesomeIcon
          className={styles.icons}
          style={iconStyle}
          icon={isliked ? faHeartSolid : faHeartRegular}
          onClick={() => handleLike()}
        />
        <FontAwesomeIcon
          onClick={() => handleCommentClick()}
          className={styles.icons}
          icon={faComment}
        />
        <FontAwesomeIcon className={styles.icons} icon={faPaperPlane} />
        <FontAwesomeIcon className={styles.iconbookmark} icon={faBookmark} />
        <span className={styles.likes}>{numberOfLikes} J'aime</span>
        <div className={styles.descriptionContainer}>
          <div className={styles.user}>
            {user}
            <span className={styles.description}>{description}</span>
          </div>
        </div>
        <div className={styles.commentsContainer}>
          <button className={styles.commentBtn}>
            Afficher les 3 commentaires
          </button>
          <input
            className={styles.commentInput}
            placeholder="Ajouter un commentaire"
            type="text"
            ref={commentInputRef}
            value={commentInput}
            onChange={handleCommentChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Posts;
