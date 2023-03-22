import { FC, useContext } from "react";
import TitleContext, { contectType } from "../../Context";
import { CreateElementType } from "./NoteCreateListElement";

import styles from "./scss/NoteTabsElement.module.scss";

const NoteCreateTabElement: FC<CreateElementType> = ({
  title,
  time,
  content,
}) => {
  const { setNoteFullScreenStatusView, setNewNoteIsActiveStatus } =
    useContext<contectType>(TitleContext!);
  return (
    <div className={styles.container}>
      <div
        onClick={() => {
          setNoteFullScreenStatusView(true);
          setNewNoteIsActiveStatus(true);
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
export default NoteCreateTabElement;
