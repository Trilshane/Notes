import { FC, useContext } from "react";
import TitleContext from "../../Context";
import NoteListElement from "./NoteListElement";

import { noteType } from "../../App";

import styles from "./scss/NotesList.module.scss";

const NotesList: FC = () => {
  const { notesArr } = useContext(TitleContext);

  return (
    <div className={styles.container}>
      {!notesArr.length && <h3>Список задач пуст</h3>}
      {notesArr.map((el: noteType, i: number) => (
        <NoteListElement
          title={el.title}
          time={el.time}
          content={el.content}
          key={i}
        />
      ))}
    </div>
  );
};
export default NotesList;
