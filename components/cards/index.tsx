import { useRouter } from "next/router";
import React from "react";
import { LinkContainer } from "../LinksContainer/LinkContainer";
import { BackToTopButton } from "../BackToTop/BackToTopButton";
import * as DB from "database";
import { database } from "database/data";

const Cards = () => {
  const router = useRouter();
  const { subcategory } = router.query;

  // This filters trough the DB with the subcategory which results in an array of arrays
  const filterSubCat = database?.map((item: any) =>
    item?.filter((cat: any) => cat.subcategory.includes(subcategory))
  );

  // This filters out an empty array from the filterSubCat
  const filterDB = filterSubCat.filter(
    (item: any, index: number) => item.length !== 0
  );

  console.log(database)

  return (
    <div
      className={`flex flex-wrap md:flex-row w-full md:justify-start gap-4 content-start lg:min-h-[calc(90vh-80px)] min-h-[calc(90vh-150px)] mb-2 ${
        filterDB.length < 3 && "lg:justify-start"
      }`}
    >
      {filterDB[0]?.map((data: any, key: number) => (
        <LinkContainer
          name={data.name}
          description={data.description}
          url={data.url}
          key={key + "-" + data.name}
        />
      ))}
      <div>
        {filterDB?.length === 0 && (
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
