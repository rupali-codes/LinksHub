import { FC, useState } from "react";
import { BackToTopButton } from "../BackToTop/BackToTopButton";
import Popup from "components/popup";
import CardsListItem from "./CardsListItem";
import type { IData } from "types";

const CardsList:FC<{ cards: IData[] }> = (props) => {
  const { cards } = props;
  const [currentCard, setCurrentCard] = useState<IData | null>(null);

  const getCardId = (item: IData | null) => {
    setCurrentCard(item);
  };

  const removeCurrentCard = () => {
    setCurrentCard(null);
  }

  return (
    <>
      <ul className={`flex w-full w-full flex-wrap content-start gap-4 md:flex-row`}>
        {cards.map((data: IData) => (
          <CardsListItem 
            key={data.id}
            data={data} 
            onClick={() => getCardId(data)} 
          />
        ))}
      </ul>
      <BackToTopButton />
      <Popup 
        currentCard={currentCard}
        onClose={removeCurrentCard}
      />
    </>
  );
};

export default CardsList;
