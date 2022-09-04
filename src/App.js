import { Routes, Route } from "react-router-dom";

import Card from "./components/Card/Card";
import EmptyCard from "./components/EmptyCard/EmptyCard";
import Layout from "./components/Layout/Layout";

// import { TextContextProvider } from "./context/textContext";
// import { ImgContextProvider } from "./context/imgContext";
// import { HolidayContextProvider } from "./context/holidaysContext";

const App = () => {
  return (
    <>
      {/*<HolidayContextProvider>*/}
      {/*<ImgContextProvider>*/}
      {/*<TextContextProvider>*/}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EmptyCard />} />
          <Route path="card/:holiday" element={<Card />} />
        </Route>
        <Route path="singleCard/:idText/:idImg" element={<Card />} />
      </Routes>

      {/*</TextContextProvider>*/}
      {/*</ImgContextProvider>*/}
      {/*</HolidayContextProvider>*/}
    </>
  );
};

export default App;
