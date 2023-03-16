import { FC, useContext } from "react";
import TitleContext, { contectType } from "../../Context";

import NoteListElement from "./NoteListElement";
import NoteCreateListElement from "./NoteCreateListElement";

import { noteType } from "../../App";

import styles from "./scss/NotesList.module.scss";

const NotesList: FC = () => {
  const {
    filteredNotesArr,
    newNoteIsActiveStatus,
    titleNote,
    nowTime,
    contentNote,
  } = useContext<contectType>(TitleContext);

  return (
    <div className={styles.container}>
      {newNoteIsActiveStatus && (
        <NoteCreateListElement
          title={titleNote ? titleNote : "Новая задача"}
          time={nowTime}
          content={contentNote ? contentNote : "нет дополнительного текста"}
        />
      )}
      {filteredNotesArr.map((el: noteType) => (
        <NoteListElement
          title={el.title}
          time={el.time}
          content={el.content}
          key={el.id}
          id={el.id}
        />
      ))}
    </div>
  );
};
export default NotesList;
