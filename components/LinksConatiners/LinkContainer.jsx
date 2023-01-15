import React from "react";

export const LinkContainer = ({ name, description, url }) => {
  return (
    <div className="w-72 bg-base-300 shadow-xl border border-dashed border-violet-500 rounded-3xl shadow">
      <div className="card-body">
        <h2 className="card-title text-violet-500 text-2xl ">{name}</h2>
        <p className="w-full text-clip">{description}</p>
        <div className="card-actions justify-end">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-6 py-2 text-white text-center font-semibold bg-violet-500 rounded-2xl w-full border border-violet-500 hover:bg-transparent hover:text-violet-500"
          >
            Visit site
          </a>
        </div>
      </div>
    </div>
  );
};
