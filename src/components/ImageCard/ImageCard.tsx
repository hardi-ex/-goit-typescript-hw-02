import React from "react";
import css from "./ImageCard.module.css";
import { ImageCardProps } from "../App/App.types";

const ImageCard: React.FC<ImageCardProps> = ({ item, openImage }) => {
  const {
    likes,
    description,
    urls: { small: imageUrl, regular: imageRegular },
  } = item;

  return (
    <>
      <img
        onClick={() => openImage({ imageRegular, description, likes })}
        className={css.img}
        src={imageUrl}
        alt={description}
      />
    </>
  );
};
export default ImageCard;
