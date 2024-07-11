export type Toggle = boolean;
export type Cards = {
  id: string;
  likes: number;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
};
export type APIResponse = {
  results: Cards[];
  total: number;
};
export type ModalImage = {
  imageRegular: string;
  description: string;
  likes: number;
} | null;

export type ImageCardProps = {
  item: Cards;
  openImage: (image: ModalImage) => void;
};

export type ImageGalleryProps = {
  cards: Cards[];
  total: number;
  isLoading: Toggle;
  openImage: (image: ModalImage) => void;
  lastCardRef: React.MutableRefObject<HTMLLIElement | null>;
};

export type ImageModalProps = {
  onClose: () => void;
  modalImage: ModalImage;
};

export type LoadMoreBtnProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export type SearchBarProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setCards: React.Dispatch<React.SetStateAction<Cards[]>>;
};

export type ErrorMessageProps = {
  message: string;
};
