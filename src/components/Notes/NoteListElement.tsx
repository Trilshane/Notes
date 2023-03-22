import { FC, useContext } from "react";
import { noteType } from "../../App";
import TitleContext, { contectType } from "../../Context";

import styles from "./scss/NoteListElement.module.scss";

const NoteListElement: FC<noteType> = ({ title, time, content, id }) => {
  const {
    setTilteNote,
    setContentNote,
    setSelectedNote,
    setChangeNoteActiveStatus,
    setNewNoteIsActiveStatus,
    selectedNote,
  } = useContext<contectType>(TitleContext);

  return (
    <div
      onClick={() => {
        setSelectedNote(id);
        setTilteNote("");
        setContentNote("");
        setChangeNoteActiveStatus(true);
        setNewNoteIsActiveStatus(false);
      }}
      className={id === selectedNote ? styles.active : styles.container}
    >
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
export default NoteListElement;
