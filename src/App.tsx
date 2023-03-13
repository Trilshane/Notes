import { FC, useState } from "react";

import NoteZone from "./components/Note/NoteZone";
import NotesContainer from "./components/Notes/NotesContainer";
import TitleContext from "./Context";

import styles from "./App.module.scss";

export interface noteType {
  title: string;
  time: string;
  content: string;
}

const App: FC = () => {
  const [query, setQuery] = useState<string>("");
  const [titleNote, setTilteNote] = useState<string>("");
  const [contentNote, setContentNote] = useState<string>("");
  const [notesArr, setNotesArr] = useState<noteType[]>([]);

  const today = new Date();
  const now = today.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const nowTime = today.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const addNoteinArray = (title: string, time: string, content: string) => {
    const newNote = {
      title: title,
      time: time,
      content: content,
    };
    setNotesArr([newNote, ...notesArr]);
    setTilteNote("");
    setContentNote("");
  };

  const filteredNotesArr = notesArr.filter((el: noteType) => {
    return query ? el.title.includes(query) : el;
  });

  return (
    <TitleContext.Provider
      value={{
        query,
        setQuery,
        titleNote,
        setTilteNote,
        contentNote,
        setContentNote,
        notesArr,
        addNoteinArray,
        now,
        nowTime,
        filteredNotesArr,
      }}
    >
      <div className={styles.container}>
        <NotesContainer />
        <NoteZone />
      </div>
    </TitleContext.Provider>
  );
};

export default App;
