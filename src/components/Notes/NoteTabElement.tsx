import { FC, useContext } from "react";
import { noteType } from "../../App";
import TitleContext, { contectType } from "../../Context";

import styles from "./scss/NoteTabsElement.module.scss";

const NoteTabElement: FC<noteType> = ({ title, time, content, id }) => {
  const {
    setListView,
    setSelectedNote,
    setNoteFullScreenStatusView,
    setTilteNote,
    setContentNote,
    setChangeNoteActiveStatus,
    setNewNoteIsActiveStatus,
  } = useContext<contectType>(TitleContext);
  return (
    <div className={styles.container}>
      <div
        onClick={() => {
          setSelectedNote(id);
          setListView(false);
          setNoteFullScreenStatusView(true);
          setTilteNote("");
          setContentNote("");
          setChangeNoteActiveStatus(true);
          setNewNoteIsActiveStatus(false);
        }}
        className={styles.noteZone}
      >
        <h4 className={styles.noteZoneTitle}>{title}</h4>
        <p className={styles.noteZoneContent}>{content}</p>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.time}>{time}</span>
    </div>
  );
};
export default NoteTabElement;
