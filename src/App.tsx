import { FC, useState } from "react";

import NoteZone from "./components/Note/NoteZone";
import NotesContainer from "./components/Notes/NotesContainer";
import TitleContext from "./Cotext";

import styles from "./App.module.scss";

const App: FC = () => {
  const [query, setQuery] = useState<string>("");
  const [titleNote, setTilteNote] = useState<string>("");
  const [contentNote, setContentNote] = useState<string>("");
  return (
    <TitleContext.Provider
      value={{
        query,
        setQuery,
        titleNote,
        setTilteNote,
        contentNote,
        setContentNote,
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
