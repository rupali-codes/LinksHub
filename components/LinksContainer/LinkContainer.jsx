import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const LinkContainer = ({ name, description, url }) => {
  const { lang } = useContext(GlobalContext)
  return (
    <div className="transition-all ease-in duration-300 w-full md:w-72 h-64 bg-white shadow-xl border border-dashed border-violet-500 rounded-3xl dark:bg-gray-900 dark:text-gray-300">
      <div className="card-body">
        <h2 className="card-title text-violet-500 text-xl">{name}</h2>
        <p className="w-full text-clip-30 h-24 overflow-x-hidden">{description}</p>
        <div className="card-actions justify-end">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-6 py-2 text-white text-center font-semibold bg-violet-600 rounded-2xl w-full hover:bg-transparent hover:text-violet-500 border border-dashed border-transparent hover:border-violet-400  bottom-0"
          >
            {lang === 'en' ? 'Visit site' : 'Visitar Sitio'}
          </a>
        </div>
      </div>
    </div>
  );
};
