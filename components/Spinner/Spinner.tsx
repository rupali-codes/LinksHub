import { CSSProperties } from "react";
import GridLoader from "react-spinners/GridLoader";

export const Spinner = ({color, size, backgroundColor}:{color:string, size:string, backgroundColor:string}) => {

  return (
    <div className={`loader ${backgroundColor} fixed top-0 left-0 w-full h-screen flex justify-center items-center`}>
      <GridLoader
        color= {color}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
