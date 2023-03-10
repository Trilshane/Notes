import { createContext } from "react";
interface createContextType {
  query: string;
}
const TitleContext = createContext();

export default TitleContext;
