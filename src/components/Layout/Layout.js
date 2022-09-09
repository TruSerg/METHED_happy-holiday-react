import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import style from "./Layout.module.css";

const Layout = () => {
  const {
    text: { idText },
    image: { idImg },
  } = useSelector((state) => state);

  return (
    <div className={style.wrapper}>
      <Header />
      <Outlet />
      <div className={style.link}>
        {idText && idImg && (
          <Link className={style.btn} to={`singleCard/${idText}/${idImg}`}>
            Поделиться открыткой
          </Link>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
