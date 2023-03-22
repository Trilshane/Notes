import { FC, useContext } from "react";

import { HiOutlinePencilAlt } from "react-icons/hi";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import TitleContext, { contectType } from "../../Context";
import InputNoteHead from "./InputNoteHead";

import styles from "./scss/NoteHead.module.scss";

const NotesHead: FC = () => {
  const {
    newNoteIsActiveStatus,
    setNewNoteIsActiveStatus,
    setChangeNoteActiveStatus,
    addNoteinArray,
    titleNote,
    nowTime,
    contentNote,
    noteFullScreenStatusView,
    setNoteFullScreenStatusView,
    setListView,
    selectedNote,
    setSelectedNote,
  } = useContext<contectType>(TitleContext);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button
          disabled={
            (titleNote === "" && newNoteIsActiveStatus) ||
            (noteFullScreenStatusView && !newNoteIsActiveStatus)
          }
          onClick={() => {
            if (!newNoteIsActiveStatus) {
              setNewNoteIsActiveStatus(true);
              setChangeNoteActiveStatus(false);
            }
            if (newNoteIsActiveStatus) {
              addNoteinArray(titleNote, nowTime, contentNote);
              setNewNoteIsActiveStatus(false);
            }
            if (noteFullScreenStatusView) {
              addNoteinArray(titleNote, nowTime, contentNote);
              setNoteFullScreenStatusView(false);
              setListView(false);
            }
            if (selectedNote) {
              setSelectedNote(0);
            }
          }}
          className={styles.button}
        >
          <HiOutlinePencilAlt />
        </button>
        <button className={styles.button}>
          <RxLetterCaseCapitalize />
        </button>
      </div>
      <InputNoteHead />
    </div>
  );
};
export default NotesHead;
