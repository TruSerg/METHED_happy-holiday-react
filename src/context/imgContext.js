import { createContext } from "react";
import { useSelector } from "react-redux";

import { useFetch } from "../hooks/useFetch";
import { URI_API } from "../const/const";

export const imgContext = createContext("");

export const ImgContextProvider = ({ children }) => {
  // const { holiday } = useContext(holidaysContext);
  const holiday = useSelector((state) => state.holidays.holiday);
  const [{ urlImg }] = useFetch(holiday ? `${URI_API}image/${holiday}` : "");

  return (
    <imgContext.Provider value={{ urlImg }}>{children}</imgContext.Provider>
  );
};
