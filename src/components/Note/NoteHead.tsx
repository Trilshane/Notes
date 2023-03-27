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
    rowTitle,
  } = useContext<contectType>(TitleContext);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button
          disabled={
            (rowTitle === "## " && newNoteIsActiveStatus) ||
            (noteFullScreenStatusView && !newNoteIsActiveStatus)
          }
          onClick={() => {
            if (!newNoteIsActiveStatus) {
              setNewNoteIsActiveStatus(true);
              setChangeNoteActiveStatus(false);
            }
            if (newNoteIsActiveStatus) {
              addNoteinArray(rowTitle, nowTime, contentNote);
              setNewNoteIsActiveStatus(false);
            }
            if (noteFullScreenStatusView) {
              addNoteinArray(rowTitle, nowTime, contentNote);
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
