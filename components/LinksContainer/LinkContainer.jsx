import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

export const LinkContainer = (props) => {
  const { name, description, url, getCardId } = props;
  return (
    <div
      onClick={() => getCardId(props)}
      className="transition-all ease-in duration-100 w-full cursor-pointer md:w-72 h-64 bg-white shadow-sm hover:shadow-purple-600 shadow- border hover:scale-[1.02] hover:border-solid border-dashed border-violet-500 rounded-3xl dark:bg-gray-900 dark:text-gray-300"
    >
      <div className="card-body">
        <h2
          className="card-title text-violet-500 text-2xl truncate cursor-default"
          title={name}
        >
          {name}
        </h2>
        <p className="w-full text-clip-30 h-24 overflow-hidden">
          {description}
        </p>
        <div className="card-actions justify-end">
          <a
            onClick={(e) => e.stopPropagation()}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-6 py-2 text-white text-center font-semibold bg-violet-600 rounded-2xl w-full hover:bg-transparent hover:text-violet-500 border border-dashed border-transparent duration-100 hover:border-violet-400  bottom-0 flex items-center justify-center"
          >
            Visit site
            <span className="ml-2">
              <BsBoxArrowUpRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
