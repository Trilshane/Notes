import { FC } from "react";

import NotesHead from "./NotesHead";
import NotesList from "./NotesList";

import styles from "./scss/NotesContainer.module.scss";

const NotesContainer: FC = () => {
  return (
    <div className={styles.container}>
      <NotesHead />
      <NotesList />
    </div>
  );
};
export default NotesContainer;
