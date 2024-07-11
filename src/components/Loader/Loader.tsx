import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.div}>
      <InfinitySpin width="200" color="rgb(49, 37, 128)" />
    </div>
  );
};
export default Loader;
