import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

import { TextContextProvider } from "./context/textContext";
import { ImgContextProvider } from "./context/imgContext";
import { HolidayContextProvider } from "./context/holidaysContext";

const wrapper = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};

const App = () => {
  return (
    <div style={wrapper}>
      <HolidayContextProvider>
        <ImgContextProvider>
          <TextContextProvider>
            <Header />
            <Card />
            <Footer />
          </TextContextProvider>
        </ImgContextProvider>
      </HolidayContextProvider>
    </div>
  );
};

export default App;
