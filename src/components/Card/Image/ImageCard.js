// import { useContext } from "react";
import { useSelector } from "react-redux";
// import { imgContext } from "../../../context/imgContext";
import CardBG from "../../../img/card-bg.jpg";

const ImageCard = () => {
  // const { urlImg } = useContext(imgContext);
  const { urlImg } = useSelector((state) => state.image);

  return (
    <img src={urlImg || CardBG} alt="Фон открытки" width={840} height={520} />
  );
};

export default ImageCard;
