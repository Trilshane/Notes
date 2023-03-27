import { FC, useContext, useEffect } from "react";
import TitleContext, { contectType } from "../../Context";
import RenderContent from "./RenderContent";
import RenderHeader from "./RenderHeader";

import styles from "./scss/Note.module.scss";

const Note: FC = () => {
  const {
    titleNote,
    setTilteNote,
    contentNote,
    setContentNote,
    now,
    nowTime,
    newNoteIsActiveStatus,
    changeNoteActiveStatus,
    activeNote,
    updateNote,
    rowTitle,
  } = useContext<contectType>(TitleContext);

  return (
    <>
      {newNoteIsActiveStatus && (
        <div className={styles.container}>
          <div className={styles.timeZone}>
            <span className={styles.date}>{now}</span>в
            <span className={styles.time}>{nowTime}</span>
          </div>
          <RenderHeader />
          {rowTitle && <RenderContent />}
        </div>
      )}
      {changeNoteActiveStatus && (
        <div className={styles.container}>
          <div className={styles.timeZone}>
            <span className={styles.date}>{now}</span>
            <span className={styles.time}>{nowTime}</span>
          </div>

          <div
            className={styles.title}
            contentEditable="true"
            onInput={(e) => {
              updateNote(activeNote?.id, "title", e.target.textContent);
            }}
          >
            {activeNote?.title}
          </div>
          <textarea
            className={styles.content}
            placeholder="Начните ввод"
            value={activeNote.content}
            onChange={(e) =>
              updateNote(activeNote?.id, "content", e.target.value)
            }
          />
        </div>
      )}
    </>
  );
};
export default Note;
