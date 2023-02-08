import { useRouter } from "next/router";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { data } from "../../database/data";
import { IData } from "../../types";
import { LinkContainer } from "../LinksContainer/LinkContainer";
import { BackToTopButton } from "../BackToTop/BackToTopButton";

const Cards = () => {
  const router = useRouter();
  const { lang } = useContext(GlobalContext)

  const subcategory = lang === 'en' ? 'subcategory_en' : 'subcategory_es'

  const filterDB = data.filter((item) =>
    item[subcategory]
      .toLowerCase()
      .includes(router.asPath.replace("/", "").toLowerCase())
  );

  return (
    <div
      className={`flex flex-wrap flex-col md:flex-row w-full md:justify-start gap-4 items-center ${
        filterDB.length < 3 && "lg:justify-start"
      }`}
    >
      {filterDB?.map((data: IData, key: number) => (
        <LinkContainer
          name={data.name}
          description={lang === 'en' ? data.description.en : data.description.es}
          url={data.url}
          key={key + "-" + data.name}
        />
      ))}
      <div className="">
        {filterDB.length === 0 && (
          <p>
            <span className="text-purple-500 animate-pulse font-semibold text-2xl">
              Coming
            </span>{" "}
            <span className="text-2xl font-semibold">Soon</span>
          </p>
        )}
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Cards;
