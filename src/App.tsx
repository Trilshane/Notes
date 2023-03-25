import { FC, useEffect, useState } from "react";

import NoteZone from "./components/Note/NoteZone";
import NotesContainer from "./components/Notes/NotesContainer";
import TitleContext from "./Context";

import styles from "./App.module.scss";

export interface noteType {
  title: string;
  time: string;
  content: string;
  id: number;
}

const App: FC = () => {
  const [query, setQuery] = useState<string>(""); // Поиск заметок
  const [titleNote, setTilteNote] = useState<string>("# "); // Заголовок заметки
  const [contentNote, setContentNote] = useState<string>(""); // Контент заметки
  const [notesArr, setNotesArr] = useState<noteType[]>([]); // Массив создаваемых заметок
  const [selectedNote, setSelectedNote] = useState<number | null>(null); // Выбранная заметка для редактирования/удаления
  const [newNoteIsActiveStatus, setNewNoteIsActiveStatus] =
    useState<boolean>(false); // Статус создания новой заметки
  const [changeNoteActiveStatus, setChangeNoteActiveStatus] =
    useState<boolean>(false); // Статус редактирования заметки
  const [listView, setListView] = useState<boolean>(true); // Статус отображения заметок ввиде списка
  const [noteFullScreenStatusView, setNoteFullScreenStatusView] =
    useState<boolean>(false);
  const [mounted, setMountend] = useState<boolean>(false);

  useEffect(() => {
    setMountend(true);
    const raw = localStorage.getItem("Array") || JSON.stringify([]);
    setNotesArr(JSON.parse(raw));
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }
    localStorage.setItem("Array", JSON.stringify(notesArr));
  }, [notesArr]);

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
      id: +today,
    };
    setNotesArr([newNote, ...notesArr]);
    setTilteNote("");
    setContentNote("");
  };

  const filteredNotesArr = notesArr.filter((el: noteType) => {
    return query ? el.title.includes(query) : el;
  });

  const activeNote: noteType | undefined = filteredNotesArr.find(
    (el) => el.id === selectedNote
  );

  const updateNote = <K extends keyof noteType, V extends noteType[K]>(
    id: number,
    key: K,
    value: V
  ) => {
    const index = notesArr.findIndex((el) => el.id === id);
    if (index === -1) {
      return;
    }
    const newNotes: typeof notesArr = Array.prototype.concat(notesArr);
    newNotes[index][key] = value;
    setSelectedNote(+today);
    newNotes[index].time = nowTime;
    newNotes[index].id = +today;
    newNotes.sort((a, b) => b.id - a.id);
    setNotesArr(newNotes);
  };
  const deleteNote = () => {
    const newNotes: typeof notesArr = Array.prototype.concat(notesArr);
    const deleArr = newNotes.filter((el) => el !== activeNote);
    setChangeNoteActiveStatus(false);
    setNewNoteIsActiveStatus(false);
    setNotesArr(deleArr);
  };

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
        selectedNote,
        setSelectedNote,
        today,
        activeNote,
        updateNote,
        newNoteIsActiveStatus,
        setNewNoteIsActiveStatus,
        changeNoteActiveStatus,
        setChangeNoteActiveStatus,
        deleteNote,
        listView,
        setListView,
        noteFullScreenStatusView,
        setNoteFullScreenStatusView,
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
