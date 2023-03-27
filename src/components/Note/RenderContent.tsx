import { FC, useContext } from "react";
import TitleContext, { contectType } from "../../Context";

const RenderContent: FC = () => {
  const { contentNote, setContentNote } = useContext<contectType>(TitleContext);
  return (
    <p
      //   className={styles.content}
      contentEditable="true"
      onInput={(e) => setContentNote(e.target.textContent)}
    >
      {contentNote}
    </p>
  );
};
export default RenderContent;
