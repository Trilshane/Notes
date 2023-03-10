import { FC, useContext } from "react";

import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import TitleContext from "../../Cotext";

import styles from "./scss/InputNoteHead.module.scss";

const InputNoteHead: FC = () => {
  const { query, setQuery } = useContext(TitleContext);
  return (
    <div className={styles.container}>
      <BiSearch className={styles.icon} />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
        placeholder="Поиск"
      />
      {query && (
        <RxCross2
          className={`${styles.icon} ${styles.iconCross}`}
          onClick={() => setQuery("")}
        />
      )}
    </div>
  );
};
export default InputNoteHead;
