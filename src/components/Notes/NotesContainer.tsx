import { FC } from "react";

import NotesHead from "./NotesHead";

import styles from "./scss/NotesContainer.module.scss";

const NotesContainer: FC = () => {
  return (
    <div className={styles.container}>
      <NotesHead />
    </div>
  );
};
export default NotesContainer;
