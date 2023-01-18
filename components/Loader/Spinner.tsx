import {GridLoader} from "react-spinners/GridLoader";

export const Spinner = ({spinnerColor, spinnerSize}:{spinnerColor:string, spinnerSize:string}) => {

  return (
    <GridLoader
      color= {spinnerColor}
      size={spinnerSize}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
