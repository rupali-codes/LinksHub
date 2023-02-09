import React from "react";

export const LinkContainer = ({ name, description, url }) => {
  return (
    <div className="transition-all ease-in duration-300 w-full md:w-72 h-64 bg-white shadow-xl border border-dashed border-violet-500 rounded-3xl dark:bg-gray-900 dark:text-gray-300">
      <div className="card-body">
        <h2 className="card-title text-violet-500 text-2xl truncate cursor-default" title={name}>{name}</h2>
        <p className="w-full text-clip-30 h-24 overflow-hidden">{description}</p>
        <div className="card-actions justify-end">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-6 py-2 text-white text-center font-semibold bg-violet-600 rounded-2xl w-full hover:bg-transparent hover:text-violet-500 border border-dashed border-transparent duration-300 hover:border-violet-400  bottom-0 group flex items-center justify-center"
          >
            Visit site
            <span className="group-hover:inline-block hidden ml-2 text-violet-600">
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
