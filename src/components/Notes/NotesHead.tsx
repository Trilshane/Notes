import { FC, useContext } from "react";

import { AiOutlineUnorderedList } from "react-icons/ai";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BsTrash3 } from "react-icons/bs";

import styles from "./scss/NotesHead.module.scss";
import TitleContext, { contectType } from "../../Context";

const NotesHead: FC = () => {
  const { deleteNote } = useContext<contectType>(TitleContext);
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <AiOutlineUnorderedList className={styles.icon} />
        <HiOutlineSquares2X2 className={styles.icon} />
      </div>
      <BsTrash3 onClick={() => deleteNote()} className={styles.icon} />
    </div>
  );
};
export default NotesHead;
