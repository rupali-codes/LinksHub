import { CSSProperties } from "react";
import GridLoader from "react-spinners/GridLoader";
import { SpinnerElement } from "../../types";

export const Spinner = ({color, size}: SpinnerElement) => {

  return (
    <div className="loader fixed top-0 left-0 w-full h-screen flex justify-center items-center">
      <GridLoader
        color= {color}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
