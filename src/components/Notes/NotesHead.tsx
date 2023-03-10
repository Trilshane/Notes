import { FC } from "react";

import { AiOutlineUnorderedList } from "react-icons/ai";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BsTrash3 } from "react-icons/bs";

import styles from "./scss/NotesHead.module.scss";

const NotesHead: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <AiOutlineUnorderedList className={styles.icon} />
        <HiOutlineSquares2X2 className={styles.icon} />
      </div>
      <BsTrash3 className={styles.icon} />
    </div>
  );
};
export default NotesHead;
