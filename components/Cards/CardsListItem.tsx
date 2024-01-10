import { FC } from 'react'
import { Card } from './Card'
import type { IData } from 'types'

const CardsListItem: FC<{ data: IData; onClick: () => void }> = (props) => {
  const { data } = props

  return (
    <li className="w-full transition-all duration-100 ease-in hover:scale-[1.02] ">
      <Card data={data} />
    </li>
  )
}

export default CardsListItem
