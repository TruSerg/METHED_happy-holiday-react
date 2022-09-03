import ImageCard from "./Image/ImageCard";
import Felicitation from "./Felicitation/Felicitation";

import style from "./Card.module.css";

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <div className={style.image}>
          <ImageCard />
          <Felicitation />
        </div>
      </div>
    </div>
  );
};

export default Card;
