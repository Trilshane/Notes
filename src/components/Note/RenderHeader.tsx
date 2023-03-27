import TitleContext, { contectType } from "../../Context";
import { FC, useContext } from "react";

const RenderHeader: FC = () => {
  const { rowTitle, setRowTitle, titleNote, setTilteNote } =
    useContext<contectType>(TitleContext);

  if (rowTitle.split(" ")[0] === "#") {
    return (
      <h1
        // className={styles.title}
        contentEditable="true"
        onInput={(e) => {
          setRowTitle("# " + e.target.textContent);
        }}
      >
        {titleNote}
      </h1>
    );
  }
  if (rowTitle.split(" ")[0] === "##") {
    return (
      <h5
        // className={styles.title}
        contentEditable="true"
        onInput={(e) => {
          setRowTitle("## " + e.target.textContent);
        }}
      >
        {titleNote}
      </h5>
    );
  }
};

export default RenderHeader;

/* title локальная переменная, который в начале редактирования получается из rowTitle через split */
