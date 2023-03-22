import { FC, useContext } from "react";
import TitleContext, { contectType } from "../../Context";

import styles from "./scss/NoteFullScreen.module.scss";

const NoteFullScreen: FC = () => {
  const {
    newNoteIsActiveStatus,
    titleNote,
    setTilteNote,
    contentNote,
    setContentNote,
    now,
    nowTime,
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
          <input
            className={styles.title}
            type="text"
            placeholder="Заголовок"
            value={titleNote}
            onChange={(e) => {
              setTilteNote(e.target.value);
            }}
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
      )}
      {changeNoteActiveStatus && (
        <div className={styles.container}>
          <div className={styles.timeZone}>
            <span className={styles.date}>{now}</span>
            <span className={styles.time}>{nowTime}</span>
          </div>
          <input
            className={styles.title}
            type="text"
            value={activeNote?.title}
            onChange={(e) =>
              updateNote(activeNote?.id, "title", e.target.value)
            }
          />
          <textarea
            className={styles.content}
            placeholder="Начните ввод"
            value={activeNote?.content}
            onChange={(e) =>
              updateNote(activeNote?.id, "content", e.target.value)
            }
          />
        </div>
      )}
    </>
  );
};
export default NoteFullScreen;
