import { FC } from 'react'
import { useRouter } from 'next/router'
import { FaSlackHash, FaInfoCircle } from 'react-icons/fa'
import PopupDesc from 'components/popup/popupCategoryDesc'

export const TopBar: FC<{ className?: string | undefined }> = (props) => {
  const { className } = props
  const router = useRouter()
  const category = router.asPath.replace('/', '')

  if (router.pathname.length === 1) {
    return null
  }

  return (
    <div
      className={`flex items-center text-xl dark:text-gray-300 ${className}`}
    >
      <FaSlackHash className="mr-2 text-gray-600 dark:text-gray-300" />
      <span className="flex font-semmibold uppercase text-gray-900 dark:text-gray-100">
        {category.split('-').join(' ')}
        <FaInfoCircle className="ml-4 mt-2 text-sm" />
        {/* <PopupDesc currentCard={category.split('-').join(' ')} /> */}
      </span>
    </div>
  )
}
