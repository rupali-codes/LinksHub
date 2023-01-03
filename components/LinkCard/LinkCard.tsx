import React from "react";
import { dataList } from "../../types";

export const LinkCard = ({name, description, url}:dataList) => {
  return (
    <div className="px-8 py-12 flex flex-col justify-between m-6 shadow-lg bg-base-200">
      <div className="flex gap-5">
        <img
          src="https://dummyimage.com/24x24"
          alt="dummyImage"
          className="w-1/6"
        />

        <div className="text-left w-4/5 text-violet-200 ">
          <h2 className="text-violet-500 font-semibold text-3xl">{name}</h2>
          <p className="my-3">
            {description}
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>Frontend</a>
              </li>
              <li>
                <a>Images & Illustrations</a>
              </li>
            </ul>
          </div>
          <div>
            <a href={url}>
            <button className="px-3 py-1 bg-violet-600 text-violet-100 w-fit float-right rounded text-sm">
              Visit site
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
