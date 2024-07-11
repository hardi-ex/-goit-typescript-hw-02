import css from "./ImageCard.module.css";

export const ImageCard = ({ item, openImage }) => {
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
