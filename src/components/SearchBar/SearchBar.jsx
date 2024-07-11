import css from "./SearchBar.module.css";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

export const SearchBar = ({ query, setQuery, setCards }) => {
  const { register, handleSubmit } = useForm({ initialValues: { query } });
  const onSubmit = (data) => {
    if (!data.query.trim())
      return toast.error("Please enter a search term to find photos");
    setCards([]);
    setQuery(data.query);
  };
  return (
    <header className={css.header}>
      <Toaster position="top-right" reverseOrder={false} />
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          {...register("query")}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
export default SearchBar;
