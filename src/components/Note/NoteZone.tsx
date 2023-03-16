import { FC } from "react";

import Note from "./Note";

import NotesHead from "./NoteHead";

import styles from "./scss/NoteZone.module.scss";

const NoteZone: FC = () => {
  return (
    <div className={styles.container}>
      <NotesHead />
      <Note />
    </div>
  );
};
export default NoteZone;
