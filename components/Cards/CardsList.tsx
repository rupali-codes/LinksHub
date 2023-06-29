import { FC, useState } from 'react'
import { BackToTopButton } from '../BackToTop/BackToTopButton'
import Popup from 'components/popup'
import CardsListItem from './CardsListItem'
import type { IData } from 'types'
import { ConfigProvider, Pagination } from 'antd'

const CardsList: FC<{ cards: IData[] }> = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState<IData | null>(null)

  const [page, setPage] = useState(1)
  const pageSize = 6

  let indexOfFirstPage, indexOfLastPage, currentCards
  indexOfLastPage = page * pageSize
  indexOfFirstPage = indexOfLastPage - pageSize
  currentCards = cards.slice(indexOfFirstPage, indexOfLastPage)

  const getCardId = (item: IData | null) => {
    setCurrentCard(item)
  }

  const removeCurrentCard = () => {
    setCurrentCard(null)
  }

    cards.sort((a: IData, b: IData) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })
  
  return (
    <>
      <ul
        className={`grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-stretch`}
      >
        {currentCards.map((data: IData) => (

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-stretch">
        {cards.map((data: IData) => (
          <CardsListItem
            key={data.id}
            data={data}
            onClick={() => getCardId(data)}
          />
        ))}
      </ul>
      <ConfigProvider
        theme={{
          token: {
            colorText: 'white',
            colorTextDisabled: 'white',
            //colorBgContainer: '#7c3aed'
          },
        }}
      > 
        <Pagination
          className="bg-violet-600 table mx-auto mt-5 p-2 rounded-full "
          size='small'
          responsive
          total={cards.length}
          current={page}
          pageSize={pageSize}
          onChange={(page) => {
            setPage(page)
          }}
        />
      </ConfigProvider>

      <BackToTopButton />
      <Popup currentCard={currentCard} onClose={removeCurrentCard} />
    </>
  )
}

export default CardsList
