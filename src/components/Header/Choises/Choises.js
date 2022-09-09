import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import { fetchHolidays } from "../../../store/holidaysSlice";
import { fetchText } from "../../../store/textSlice";
import { fetchImage } from "../../../store/imageSlice";

import style from "./Choises.module.css";

const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  // const { holidays, holiday, changeHoliday } = useContext(holidaysContext);
  const { holidays, isLoading } = useSelector((state) => state.holidays);
  const dispatch = useDispatch();

  const { holiday } = useParams();

  const toggleChoices = () => {
    if (isLoading !== "success") return;

    setIsOpenChoices(!isOpenChoices);
  };

  useEffect(() => {
    dispatch(fetchHolidays());

    if (holiday) {
      dispatch(fetchText(holiday));
      dispatch(fetchImage(holiday));
    }
  }, [dispatch, holiday]);

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoices}>
        {isLoading !== "success" ? (
          <CircularProgress color="success" />
        ) : (
          holidays[holiday] || "Выбрать праздник"
        )}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
          {Object.entries(holidays).map((item) => (
            <li
              className={style.item}
              key={item[0]}
              onClick={() => {
                // changeHoliday(item[0]);
                toggleChoices();
              }}
            >
              <NavLink
                className={({ isActive }) => (isActive ? style.linkActive : "")}
                to={`card/${item[0]}`}
              >
                {item[1]}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Choices;
