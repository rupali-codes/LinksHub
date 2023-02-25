import React, { useState } from "react";
import { LinkContainer } from "../LinksContainer/LinkContainer";
import { BackToTopButton } from "../BackToTop/BackToTopButton";
import useFilterDB from "hooks/useFilterDB";
import Popup from "components/popup";
import { DBType } from "types";

const Cards = () => {
  const { filterDB } = useFilterDB();
  const [currentCard, setCurrentCard] = useState<DBType | null>(null);
  const getCardId = (item: DBType | null) => {
    setCurrentCard(item);
  };
  return (
    <div
      className={`flex flex-wrap md:flex-row w-full md:justify-start gap-4 content-start lg:min-h-[calc(90vh-80px)] min-h-[calc(90vh-150px)] mb-2 ${
        filterDB.length < 3 && "lg:justify-start"
      }`}
    >
      {filterDB[0]?.map((data: DBType, key: number) => (
        <LinkContainer
          {...data}
          key={key + "-" + data.name}
          getCardId={getCardId}
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
      <Popup getCardId={getCardId} currentCard={currentCard} />
    </div>
  );
};

export default Cards;
