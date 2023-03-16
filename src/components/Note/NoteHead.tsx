import { FC, useContext } from "react";

import { HiOutlinePencilAlt } from "react-icons/hi";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import TitleContext, { contectType } from "../../Context";
import InputNoteHead from "./InputNoteHead";

import styles from "./scss/NoteHead.module.scss";

const NotesHead: FC = () => {
  const {
    newNoteIsActiveStatus,
    changeNoteActiveStatus,
    setNewNoteIsActiveStatus,
    setChangeNoteActiveStatus,
    addNoteinArray,
    titleNote,
    nowTime,
    contentNote,
  } = useContext<contectType>(TitleContext);

  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <HiOutlinePencilAlt
          onClick={() => {
            if (!newNoteIsActiveStatus) {
              setNewNoteIsActiveStatus(true);
              setChangeNoteActiveStatus(false);
            } else if (newNoteIsActiveStatus) {
              addNoteinArray(titleNote, nowTime, contentNote);
              setNewNoteIsActiveStatus(true);
            }
          }}
          className={styles.icon}
        />
        <RxLetterCaseCapitalize className={styles.icon} />
      </div>
      <InputNoteHead />
    </div>
  );
};
export default NotesHead;
