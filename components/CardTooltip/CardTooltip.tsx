// CardTooltip.tsx

import React from 'react'
import { Tooltip } from 'react-tooltip'

interface CardTooltipProps {
  theme: string | undefined
}

const CardTooltip: React.FC<CardTooltipProps> = ({ theme }) => {
  return (
    <Tooltip
      id="info-tooltip"
      opacity="1"
      className="cardTooltip"
      style={
        theme == 'dark'
          ? { color: '#fff' }
          : {
              color: '#A1A1A9',
              boxShadow: '0 0 8px #bdbdbd',
              backgroundColor: '#fff',
              backdropFilter: 'blur(100px)',
            }
      }
    />
  )
}

export default CardTooltip
