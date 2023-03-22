import { createContext } from "react";
import { noteType } from "./App";

export interface contectType {
  query: string;
  setQuery: (value: string) => void;
  titleNote: string;
  setTilteNote: React.Dispatch<React.SetStateAction<string>>;
  contentNote: string;
  setContentNote: React.Dispatch<React.SetStateAction<string>>;
  notesArr: noteType[];
  addNoteinArray: (title: string, time: string, content: string) => void;
  now: string;
  nowTime: string;
  filteredNotesArr: noteType[];
  selectedNote: number | null;
  setSelectedNote: React.Dispatch<React.SetStateAction<number | null>>;
  today: Date;
  activeNote: noteType | undefined;
  updateNote: <K extends keyof noteType, V extends noteType[K]>(
    id: number,
    key: K,
    value: V
  ) => void;
  newNoteIsActiveStatus: boolean;
  setNewNoteIsActiveStatus: React.Dispatch<React.SetStateAction<boolean>>;
  changeNoteActiveStatus: boolean;
  setChangeNoteActiveStatus: React.Dispatch<React.SetStateAction<boolean>>;
  deleteNote: () => void;
  listView: boolean;
  setListView: React.Dispatch<React.SetStateAction<boolean>>;
  noteFullScreenStatusView: boolean;
  setNoteFullScreenStatusView: React.Dispatch<React.SetStateAction<boolean>>;
}

const TitleContext = createContext<contectType | null>(null);

export default TitleContext;
