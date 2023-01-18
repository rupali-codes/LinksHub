import React from "react";
import { data } from "../../database/data";
import { ISideNavbarElement, IData } from "../../types/index";
import { FaSlackHash } from "react-icons/fa";
import { LinkContainer } from "./LinkContainer";

export const LinksContainer = () => {
  return (
    <section>
      <div className="my-8 mx-auto lg:mx-20">
        <div className="flex itmes-center text-white text-3xl my-4 font-bold uppercase">
          <FaSlackHash className="mt-1 text-gray-400" />
          <h2 className="">Images</h2>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row w-full md:justify-between gap-5 items-center">
          {data.filter(item=>item.subcategory.includes(item.subcategory)).map((d:IData, key:number) => (
            <LinkContainer
              name={d.name}
              description={d.description}
              url={d.url}
              key={key}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

LinksContainer.defaultProps = {
  title: "Images",
  data,
};
