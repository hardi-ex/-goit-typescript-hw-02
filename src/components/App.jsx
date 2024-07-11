import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";
import { getPostByQuery } from "./Api/api";
import { useState, useEffect, useRef } from "react";

const App = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [total, setTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const lastCardRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results, total } = await getPostByQuery({ page, query });
        setCards((prevCards) => [...prevCards, ...results]);
        setTotal(total);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (query !== "") {
      getData();
    }
  }, [page, query]);

  useEffect(() => {
    if (lastCardRef.current) {
      lastCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [cards]);

  const toggleModal = () => setIsOpen((prev) => !prev);
  const openImage = (image) => {
    toggleModal();
    setModalImage(image);
  };

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} setCards={setCards} />
      {!isLoading && error && <ErrorMessage message={error.message} />}
      {query !== "" && !error && (
        <ImageGallery
          openImage={openImage}
          cards={cards}
          total={total}
          isLoading={isLoading}
          lastCardRef={lastCardRef}
        />
      )}
      {isLoading && <Loader />}
      {!isLoading && !error && cards.length < total && (
        <LoadMoreBtn setPage={setPage} />
      )}
      {isOpen && <ImageModal onClose={toggleModal} modalImage={modalImage} />}
    </>
  );
};

export default App;
