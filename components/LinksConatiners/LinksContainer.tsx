import React from "react";
import { data } from "../../database/data";
import { ISideNavbarElement, IData } from "../../types/index";
import { FaSlackHash } from "react-icons/Fa";
import { LinkContainer } from "./LinkContainer";

export const LinksContainer = ({title, data}) => {
  return (
    <section>
      <div className="my-8 mx-auto lg:mx-20">
        <div className="flex itmes-center text-white text-3xl my-4 font-bold uppercase">
          <FaSlackHash className="mt-1 text-gray-400" />
          <h2 className="">{title}</h2>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row w-full md:justify-between gap-5 items-center">
          {data.map((d, key) => (
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
