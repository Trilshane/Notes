import { FC } from "react";
import { noteType } from "../../App";

import styles from "./scss/NoteListElement.module.scss";

const NoteCreateListElement: FC<noteType> = ({ title, time, content }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> {title}</h2>
      <div className={styles.timeAndContentZone}>
        <span className={styles.time}>{time}</span>
        <span className={styles.content}>
          {content ? content : "Нет дополнительного текста"}
        </span>
      </div>
    </div>
  );
};
export default NoteCreateListElement;
