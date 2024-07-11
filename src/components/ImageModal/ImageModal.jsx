import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { useEffect } from "react";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    maxWidth: "90vw",
    maxHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    backgroundColor: "rgba(40, 40, 40, 0.75)",
  },
};

export const ImageModal = ({ onClose, modalImage }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Modal isOpen={true} onRequestClose={onClose} style={customStyles}>
      <img
        className={css.img}
        src={modalImage.imageRegular}
        alt={modalImage.description}
      />
      <p className={css.text}>
        Likes: {modalImage.likes} | Description:{" "}
        {modalImage.description ? modalImage.description : "None"}
      </p>
    </Modal>
  );
};
export default ImageModal;
