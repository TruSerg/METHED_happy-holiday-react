import { createContext, useState } from "react";

import { useHolidays } from "../hooks/useHolidays";

export const holidaysContext = createContext({});

export const HolidayContextProvider = ({ children }) => {
  const [holiday, setHoliday] = useState("");
  const [holidays] = useHolidays();

  const changeHoliday = (title) => {
    setHoliday(title);
  };
  return (
    <holidaysContext.Provider value={{ holiday, holidays, changeHoliday }}>
      {children}
    </holidaysContext.Provider>
  );
};
