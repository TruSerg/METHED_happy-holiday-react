import { useSelector } from "react-redux";

import style from "./Felicitation.module.css";

const Felicitation = () => {
  // const { text } = useContext(textContext);
  const { text, isLoading } = useSelector((state) => state.text);

  return (
    <p className={style.felicitation}>
      {
        /*{text ?? "Выберите повод для поздравления!"}*/
        isLoading === "loading"
          ? "Загрузка..."
          : text === ""
          ? "Выберите повод для поздравления!"
          : text
      }
    </p>
  );
};

export default Felicitation;
