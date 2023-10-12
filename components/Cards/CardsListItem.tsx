import { FC } from 'react'
import { Card } from './Card'
import type { IData } from 'types'

const CardsListItem: FC<{ data: IData; onClick: () => void }> = (props) => {
  const { data, onClick } = props

  return (
    <li
      className="w-full cursor-pointer transition-all duration-100 ease-in hover:scale-[1.02] "
      onClick={onClick}
    >
      <Card data={data} />
    </li>
  )
}

export default CardsListItem
