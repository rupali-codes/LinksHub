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

  const removeCurrentCard = () => {
    setCurrentCard(null);
  }

  return (
    <ul
      className={`flex min-h-[calc(100%-68px)] w-full flex-wrap content-start gap-4 pt-[85px] pb-4 md:pt-10 md:min-h-[calc(100%-76px)] md:flex-row md:px-10 ${
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
      <div className="pt-6 md:p-0">
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
      <Popup 
        currentCard={currentCard}
        onClose={removeCurrentCard}
      />
    </ul>
  );
};

export default Cards;
