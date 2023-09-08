import { FC, useState } from 'react'
import { BackToTopButton } from '../BackToTop/BackToTopButton'
import { PopupInfo } from 'components/popup/popupInfo'
import CardsListItem from './CardsListItem'
import type { IData } from 'types'

const CardsList: FC<{ cards: IData[] }> = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState<IData | null>(null)

  const getCardId = (item: IData | null) => {
    setCurrentCard(item)
  }
  return (
    <div>
      {currentCards.map((card) => (
        <CardsListItem
          key={card.id}
          card={card}
          getCardId={getCardId}
        />
      ))}
      <Pagination
        current={page}
        pageSize={pageSize}
        total={cards.length}
        onChange={setPage}
      />
    </div>
  )
  const removeCurrentCard = () => {
    setCurrentCard(null)
  }

  cards.sort((a: IData, b: IData) => a.name.localeCompare(b.name))

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-stretch">
        {cards.map((data: IData) => (
          <CardsListItem
            key={data.id}
            data={data}
            onClick={() => getCardId(data)}
          />
        ))}
      </ul>
      <BackToTopButton />
      <PopupInfo currentCard={currentCard} onClose={removeCurrentCard} />
    </>
  )
}

export default CardsList
