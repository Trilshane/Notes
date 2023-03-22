import { FC } from "react";

import styles from "./scss/NoteListElement.module.scss";

export interface CreateElementType {
  title: string;
  time: string;
  content: string;
}
const NoteCreateListElement: FC<CreateElementType> = ({
  title,
  time,
  content,
}) => {
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
