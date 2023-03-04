import { FC } from "react";
import { createPortal } from "react-dom";

export const Backdrop: FC<{ onClick: (() => void) | undefined}> = (props) => {
  const { onClick } = props;

  return createPortal(
    <div 
      className={`fixed inset-0 z-50 h-full w-full cursor-pointer bg-black/80 lg:hidden`}
      onClick={onClick}
    ></div>,
    document.getElementById('backdrop-root')!
  );
};
