import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

import style from "./Felicitation.module.css";

const Felicitation = () => {
  // const { text } = useContext(textContext);
  const { text, isLoading } = useSelector((state) => state.text);

  return (
    <p className={style.felicitation}>
      {
        /*{text ?? "Выберите повод для поздравления!"}*/
        isLoading === "loading" ? (
          <CircularProgress color="success" />
        ) : text === "" ? (
          "Выберите повод для поздравления!"
        ) : (
          text
        )
      }
    </p>
  );
};

export default Felicitation;
