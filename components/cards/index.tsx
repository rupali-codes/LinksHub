import { useRouter } from "next/router";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { data } from "../../database/data";
import { IData } from "../../types";
import { LinkContainer } from "../LinksConatiners/LinkContainer";

const Cards = () => {
  const router = useRouter();
  const { sidebar } = useContext(GlobalContext);

  const filterDB = data.filter((item) =>
    item.subcategory
      .toLowerCase()
      .includes(router.pathname.replace("/", "").toLowerCase())
  );
  return (
    <div
      className={`flex flex-wrap flex-col md:flex-row lg:flex-row w-full ${
        filterDB.length < 3 ? "lg:justify-start" : ""
      } md:justify-start gap-4 items-center`}
    >
      {filterDB?.map((d: IData, key: number) => (
        <LinkContainer
          name={d.name}
          description={d.description}
          url={d.url}
          key={key}
        />
      ))}
      {filterDB.length === 0 && (
        <p
          className={`text-white font-semibold z-[-10] text-2xl   ${
            !sidebar && "animate-pulse"
          }`}
        >
          <span className="text-purple-500">Coming</span> Soon
        </p>
      )}
    </div>
  );
};

export default Cards;
