import css from "./LoadMoreBtn.module.css";
export const LoadMoreBtn = ({ setPage }) => {
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
