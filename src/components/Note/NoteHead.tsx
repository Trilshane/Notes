import { FC } from "react";

import { HiOutlinePencilAlt } from "react-icons/hi";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import InputNoteHead from "./InputNoteHead";

import styles from "./scss/NoteHead.module.scss";

const NotesHead: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <HiOutlinePencilAlt className={styles.icon} />
        <RxLetterCaseCapitalize className={styles.icon} />
      </div>
      <InputNoteHead />
    </div>
  );
};
export default NotesHead;
