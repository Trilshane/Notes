import { FC, useContext, useState } from "react";
import TitleContext from "../../Context";

import styles from "./scss/Note.module.scss";

const Note: FC = () => {
  const {
    titleNote,
    setTilteNote,
    contentNote,
    setContentNote,
    addNoteinArray,
    now,
    nowTime,
  } = useContext(TitleContext);

  return (
    <div className={styles.container}>
      <div className={styles.timeZone}>
        <span className={styles.date}>{now}</span>в
        <span className={styles.time}>{nowTime}</span>
      </div>
      <input
        className={styles.title}
        type="text"
        placeholder="Заголовок"
        value={titleNote}
        onChange={(e) => setTilteNote(e.target.value)}
      />
      {titleNote && (
        <textarea
          className={styles.content}
          placeholder="Начните ввод"
          value={contentNote}
          onChange={(e) => setContentNote(e.target.value)}
        />
      )}
      {titleNote && (
        <button
          className={styles.addNoteButton}
          onClick={() => {
            addNoteinArray(titleNote, nowTime, contentNote);
          }}
        >
          +
        </button>
      )}
    </div>
  );
};
export default Note;
