import { FC, useContext } from "react";
import TitleContext, { contectType } from "../../Context";

import Note from "./Note";
import NoteFullScreen from "./NoteFullScreen";

import NotesHead from "./NoteHead";

import styles from "./scss/NoteZone.module.scss";

const NoteZone: FC = () => {
  const { listView, noteFullScreenStatusView } =
    useContext<contectType>(TitleContext);
  return (
    <div className={styles.container}>
      <NotesHead />
      {listView && <Note />}
      {noteFullScreenStatusView && <NoteFullScreen />}
    </div>
  );
};
export default NoteZone;
