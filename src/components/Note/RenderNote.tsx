import styles from "./scss/Note.module.scss";
import TitleContext, { contectType } from "../../Context";
import { FC, useContext } from "react";



function RenderHeader() {
    const {
        titleNote,
        setTilteNote,
      } = useContext<contectType>(TitleContext);

    if (titleNote.split(' ')[0] === '#') {
        return (
            <h1
                className={styles.title}
                contentEditable='true'
                onInput={(e) => {
                    setTilteNote(e.target.textContent);
                }}
            >
                {titleNote.split(' ')[1]}
            </h1>
        )
    } else {
        return (
            <h2
                className={styles.title}
                contentEditable='true'
                onInput={(e) => {
                    setTilteNote(e.target.textContent);
                }}
            >
                {titleNote}
            </h2>

        )
    }
}

export default RenderHeader