import React, { useState, useEffect, useRef } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import { getPostByQuery } from "../Api/api";
import { Toggle, Cards, APIResponse, ModalImage } from "./App.types";

const App = () => {
  const [cards, setCards] = useState<Cards[]>([]);
  const [isLoading, setIsLoading] = useState<Toggle>(false);
  const [error, setError] = useState<Toggle>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<Toggle>(false);
  const [modalImage, setModalImage] = useState<ModalImage>(null);
  const lastCardRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results, total }: APIResponse = await getPostByQuery({
          page,
          query,
        });
        setCards((prevCards) => [...prevCards, ...results]);
        setTotal(total);
      } catch (error) {
        setError(true);
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
  const openImage = (image: ModalImage) => {
    toggleModal();
    setModalImage(image);
  };

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} setCards={setCards} />
      {!isLoading && error && <ErrorMessage message="Error message" />}
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
