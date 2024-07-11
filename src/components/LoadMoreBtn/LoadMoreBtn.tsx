import React from "react";
import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "../App/App.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ setPage }) => {
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={css.div}>
      <button onClick={handleLoadMore} className={css.btn} type="button">
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
