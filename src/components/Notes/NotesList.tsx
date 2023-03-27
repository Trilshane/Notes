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
    nowTime,
    contentNote,
    listView,
    rowTitle,
  } = useContext<contectType>(TitleContext);

  return (
    <>
      {listView && (
        <div className={styles.container}>
          {newNoteIsActiveStatus && (
            <NoteCreateListElement
              title={
                rowTitle !== "## " ? rowTitle.split(" ")[1] : "Новая задача"
              }
              time={nowTime}
              content={contentNote ? contentNote : "нет дополнительного текста"}
            />
          )}
          {filteredNotesArr.map((el: noteType) => (
            <NoteListElement
              title={el.title.split(" ")[1]}
              time={el.time}
              content={el.content}
              key={el.id}
              id={el.id}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default NotesList;
