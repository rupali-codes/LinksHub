import Gridloader from "react-spinners/GridLoader"

export const Spinner = ({spinnerColor, spinnerSize}:{spinnerColor:string, spinnerSize:number}) => {

  return (
    <Gridloader
      color= {spinnerColor}
      size={spinnerSize}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
