import React from "react";
import { CollapsElement } from "./CollapsElement";
import { dataList,ICollapsProps } from "../../types";

export const Collaps = ({elements,title}:ICollapsProps) => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow border-b border-base-100">
      <div className="collapse-title text-[17px] font-medium">
        {title}
      </div>
      <div className="collapse-content flex flex-col gap-3">
        {
        elements.map((element:dataList, i:number) => (
          <CollapsElement name={element.name} description={element.description} url={element.url} key={i} />
        ))}
      </div>
    </div>
  );
};
