import React from "react";
import css from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "../App/App.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={css.div}>
      <p>Something went wrong: {message}</p>
    </div>
  );
};
export default ErrorMessage;
