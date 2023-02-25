import React from "react";
import { DBType } from "types";

const Popup: React.FC<{
  currentCard: null | DBType;
  getCardId: (item: DBType | null) => void;
}> = ({ currentCard, getCardId }) => {
  return (
    <div
      onClick={() => getCardId(null)}
      className={` ${
        currentCard ? "w-full h-screen" : "w-0 h-0"
      } overflow-hidden flex fixed top-0 left-0 bg-[rgba(0,0,0,.5)] backdrop-blur-md z-20`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`max-w-[500px] transition-all ${
          currentCard ? "scale-100" : "scale-0"
        } h-[500px] w-full overflow-hidden  p-5 bg-black m-auto gap-10 flex flex-col`}
      >
        <p>name: {currentCard?.name}</p>
        <p>category: {currentCard?.category}</p>
        <p>description: {currentCard?.description}</p>
        <p>url: {currentCard?.url}</p>
        <p>id: {currentCard?.id}</p>
      </div>
    </div>
  );
};

export default Popup;
