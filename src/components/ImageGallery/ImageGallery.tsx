import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "../App/App.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({
  cards,
  total,
  isLoading,
  openImage,
  lastCardRef,
}) => {
  return (
    <div>
      <h2 className={css.title}>Total results: {total}</h2>
      {!isLoading && total === 0 && (
        <p className={css.text}>
          No photos were found matching your search criteria
        </p>
      )}
      <ul className={css.ul}>
        {cards.map((item, index) => (
          <li
            key={item.id}
            ref={index === cards.length - 1 ? lastCardRef : null}
          >
            <ImageCard openImage={openImage} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ImageGallery;
