import { FC, useContext, useState } from "react";
import TitleContext from "../../Cotext";

import styles from "./scss/Note.module.scss";

const Note: FC = () => {
  const { titleNote, setTilteNote, contentNote, setContentNote } =
    useContext(TitleContext);
  return (
    <div className={styles.container}>
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
    </div>
  );
};
export default Note;
