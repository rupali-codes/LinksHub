import React from "react";
import { DataList } from "../../types";
export const CollapsElement = ({ name, description, url }: DataList) => {
  return (
    <a href={url}>
      <div className="border-b-2 border-base-200 py-2 cursor-pointer">
        <h4 className="text-violet-500 font-semibold text-[17px]">{name}</h4>
        <p>{description}</p>
      </div>
    </a>
  );
};
