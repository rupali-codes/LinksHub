import React from "react";
import { DBType } from "types";
import { BsGlobe } from "react-icons/bs";

const Popup: React.FC<{
  currentCard: null | DBType;
  getCardId: (item: DBType | null) => void;
}> = ({ currentCard, getCardId }) => {
  return (
    <div
      onClick={() => getCardId(null)}
      className={` ${
        currentCard ? "w-full h-screen" : "w-0 h-0"
      } fixed top-0 left-0 z-[100] flex items-center justify-center h-screen cursor-pointer overflow-hidden bg-black/80`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`max-w-[500px] transition-all ${
          currentCard ? "scale-100" : "scale-0"
        } h-fit w-full overflow-hidden ml-3 mr-3 px-5 py-10 dark:bg-gray-900 bg-gray-100 rounded-2xl m-auto gap-5 flex flex-col justify-between border border-dashed border-violet-600`}
      >
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <h2 className="max-w-[80%] text-2xl text-violet-500 capitalize">
              {currentCard?.name}
            </h2>
            <h5 className="max-w-[20%] text-xsm text-violet-500 capitalize flex items-center gap-1">
              {
                currentCard?.language ? (
                  <>
                  <BsGlobe />
                  {currentCard?.language}
                  </>
                ) : ''
              }
            </h5>
          </div>
          <p className="">{currentCard?.description}</p>
        </div>
        <div className="card-actions justify-end">
          <a
            onClick={(e) => e.stopPropagation()}
            href={currentCard?.url}
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-6 py-2 text-white text-center bg-violet-600 rounded-2xl w-full hover:bg-transparent hover:text-violet-500 border border-dashed border-transparent duration-100 hover:border-violet-400  bottom-0 flex items-center justify-center bottom-0 relative"
          >
            Visit site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
