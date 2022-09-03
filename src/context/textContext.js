import { createContext } from "react";
import { useSelector } from "react-redux";

import { useFetch } from "../hooks/useFetch";
import { URI_API } from "../const/const";

export const textContext = createContext({});

export const TextContextProvider = ({ children }) => {
  // const { holiday } = useContext(holidaysContext);
  const holiday = useSelector((state) => state.holidays.holiday);
  const [{ text }] = useFetch(holiday ? `${URI_API}text/${holiday}` : "");

  return (
    <textContext.Provider value={{ text }}>{children}</textContext.Provider>
  );
};
