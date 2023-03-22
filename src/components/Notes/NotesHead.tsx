import { FC, useContext } from "react";

import { AiOutlineUnorderedList } from "react-icons/ai";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BsTrash3 } from "react-icons/bs";

import styles from "./scss/NotesHead.module.scss";
import TitleContext, { contectType } from "../../Context";

const NotesHead: FC = () => {
  const {
    listView,
    setListView,
    deleteNote,
    setNoteFullScreenStatusView,
    noteFullScreenStatusView,
    activeNote,
    notesArr,
  } = useContext<contectType>(TitleContext);
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button
          disabled={listView}
          className={styles.button}
          onClick={() => {
            setListView(true);
            setNoteFullScreenStatusView(false);
          }}
        >
          <AiOutlineUnorderedList />
        </button>
        <button
          disabled={!listView || notesArr.length === 0}
          className={styles.button}
          onClick={() => {
            setListView(false);
            setNoteFullScreenStatusView(false);
          }}
        >
          <HiOutlineSquares2X2 />
        </button>
      </div>
      <button
        disabled={!activeNote}
        className={styles.button}
        onClick={() => {
          deleteNote();
          if (noteFullScreenStatusView) {
            setNoteFullScreenStatusView(false);
          }
        }}
      >
        <BsTrash3 />
      </button>
    </div>
  );
};
export default NotesHead;
