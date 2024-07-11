import css from "./ErrorMessage.module.css";

export const ErrorMessage = ({ message }) => {
  return (
    <div className={css.div}>
      <p>Something went wrong: {message}</p>
    </div>
  );
};
export default ErrorMessage;
