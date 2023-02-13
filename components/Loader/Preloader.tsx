import useLoader from "hooks/useLoader";
import { ReactNode } from "react";
import { Spinner } from "./Spinner";

export const Preloader = ({
  backgroundColor,
  children,
  ...rest
}: {
  children: JSX.Element;
  backgroundColor: string;
  color: string;
  size: number;
}): JSX.Element => {
  const { loader } = useLoader();
  if (!loader) return children;
  return (
    <div
      className={`loader ${backgroundColor} fixed top-0 left-0 w-full h-screen flex justify-center items-center`}
    >
      <Spinner {...rest} />
    </div>
  );
};
