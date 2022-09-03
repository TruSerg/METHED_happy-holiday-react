import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchHolidays, setHoliday } from "../../../store/holidaysSlice";
import { fetchText } from "../../../store/textSlice";

import style from "./Choises.module.css";

const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  // const { holidays, holiday, changeHoliday } = useContext(holidaysContext);
  const { holiday, holidays, isLoading } = useSelector(
    (state) => state.holidays
  );
  const dispatch = useDispatch();

  const toggleChoices = () => {
    if (isLoading !== "success") return;

    setIsOpenChoices(!isOpenChoices);
  };

  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoices}>
        {isLoading !== "success"
          ? "Загрузка..."
          : holidays[holiday] || "Выбрать праздник"}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
          {Object.entries(holidays).map((item) => (
            <li
              className={style.item}
              key={item[0]}
              onClick={() => {
                // changeHoliday(item[0]);
                dispatch(setHoliday(item[0]));
                dispatch(fetchText(item[0]));
                toggleChoices();
              }}
            >
              {item[1]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Choices;
