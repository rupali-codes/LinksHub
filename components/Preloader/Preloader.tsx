import Gridloader from "react-spinners/GridLoader";

const Preloader = ({
  backgroundColor,
  spinnerColor,
  spinnerSize,
}: {
  backgroundColor: string;
  spinnerColor: string;
  spinnerSize: number;
}) => {
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

export default Preloader;
