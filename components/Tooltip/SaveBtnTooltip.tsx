import { FC } from 'react'
import { Tooltip } from 'react-tooltip'

interface Props {
  tooltipId: string
}

export const SaveBtnTooltip: FC<Props> = ({tooltipId}) => {
  return (
    <Tooltip
      id={tooltipId}
      style={{
        backgroundColor: '#8b5cf6',
        fontSize: '13px',
        paddingLeft: '6px',
        paddingRight: '6px',
        paddingTop: '2px',
        paddingBottom: '2px',
      }}
    > Coming Soon!
      </Tooltip>
  )
}
