import { FC, useContext } from "react";
import TitleContext, { contectType } from "../../Context";
import RenderHeader from "./RenderNote";

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

          {titleNote && (
            <textarea
              className={styles.content}
              placeholder="Начните ввод"
              value={contentNote}
              onChange={(e) => setContentNote(e.target.value)}
            />
          )}
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
            contentEditable='true'
            onChange={(e) =>
              updateNote(activeNote?.id, "title", e.target.value)
            }
          >
            {activeNote.title}
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
