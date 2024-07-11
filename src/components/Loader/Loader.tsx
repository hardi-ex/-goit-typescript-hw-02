import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={css.div}>
      <InfinitySpin
        visible={true}
        width="200"
        color="rgb(49, 37, 128)"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};
export default Loader;
