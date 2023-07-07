import Gridloader from 'react-spinners/GridLoader'
import { LengthType } from 'react-spinners/helpers/props'

export const Spinner = (props: { color: string; size: LengthType }) => {
  return (
    <Gridloader {...props} aria-label="Loading Spinner" data-testid="loader" />
  )
}
