import { FC, useContext } from "react";
import { noteType } from "../../App";
import TitleContext, { contectType } from "../../Context";

import NoteCreateTabElement from "./NoteCreateTabElement";
import NoteTabElement from "./NoteTabElement";

import styles from "./scss/NoteTabs.module.scss";

const NoteTabs: FC = () => {
  const {
    listView,
    newNoteIsActiveStatus,
    nowTime,
    filteredNotesArr,
    noteFullScreenStatusView,
  } = useContext<contectType>(TitleContext);
  return (
    <>
      {!listView && !noteFullScreenStatusView && (
        <div className={styles.container}>
          {newNoteIsActiveStatus && (
            <NoteCreateTabElement
              title={"Новая задача"}
              time={nowTime}
              content={"нет дополнительного текста"}
            />
          )}
          {filteredNotesArr.map((el: noteType) => (
            <NoteTabElement
              title={el.title}
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
export default NoteTabs;
