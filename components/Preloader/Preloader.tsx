import Gridloader from "react-spinners/GridLoader";
import { PreloaderProps } from "../../types";

export const Preloader = ({
  backgroundColor,
  spinnerColor,
  spinnerSize,
}: PreloaderProps) => {
  return (
    <div
      className={`loader ${backgroundColor} fixed top-0 left-0 w-full h-screen flex justify-center items-center`}
    >
      <Gridloader
        color={spinnerColor}
        size={spinnerSize}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
