import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FaSlackHash, FaInfoCircle } from 'react-icons/fa'
import PopupDesc from 'components/popup/popupCategoryDesc'
import { ICategoryData } from 'types'
import categoryDescriptions from './CategoryDescriptions'
import { useResults } from 'hooks/ResultsContext'
import { Tooltip } from 'react-tooltip'

interface TopBarProps {
  className?: string
  results: number
}

export const TopBar: FC<TopBarProps> = ({ className }) => {
  const { results } = useResults()
  const [isSearchFound, setIsSearchFound] = useState(false)
  const [currentCategory, setCurrentCategory] = useState<ICategoryData | null>(
    null
  )
  const router = useRouter()
  const category = router.asPath
  const categoryName = category.split('/')[1].split('-').join(' ')
  const subcategoryName = category?.split('/')[2]?.split('-').join(' ')
  const regEx = /[ `!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/g
  let cleanedCategory = ''
  if (subcategoryName) {
    cleanedCategory = subcategoryName
      .replaceAll(regEx, ' ')
      .replaceAll('search query ', '')
  } else {
    cleanedCategory = categoryName
      .replaceAll(regEx, ' ')
      .replaceAll('search query ', '')
  }

  useEffect(() => {
    if (results > 0) {
      setIsSearchFound(true)
    } else if (results === 0) {
      setIsSearchFound(false)
    }
  }, [results])

  if (router.pathname.length === 1) {
    return null
  }

  const handleCardClick: () => void = () => {
    const description = categoryDescriptions[subcategoryName] || ''
    const categoryInfo = {
      name: subcategoryName,
      description,
    }
    setCurrentCategory(categoryInfo)
  }

  const removeCurrentCard: () => void = () => {
    setCurrentCategory(null)
  }

  return (
    <>
      {subcategoryName && (
        <>
          {isSearchFound ? (
            <div
              data-custom="restrict-click-outside"
              className={`flex items-center text-xl dark:text-gray-300 ${className}`}
            >
              <FaSlackHash className="mr-2 text-gray-600 dark:text-gray-300" />
              <span className="flex uppercase text-gray-900 dark:text-gray-100">
                {isSearchFound ? `${cleanedCategory}` : `No Results Found`}
              </span>
              <button>
                <FaInfoCircle
                  data-tooltip-id="info-tooltip"
                  data-tooltip-content="Description"
                  data-tooltip-place="bottom"
                  className="ml-4 mt-2 text-sm cursor-pointer hover:text-theme-primary"
                  onClick={handleCardClick}
                />
              </button>
              <Tooltip
                id="info-tooltip"
                style={{
                  backgroundColor: '#8b5cf6',
                  fontSize: '13px',
                  paddingLeft: '6px',
                  paddingRight: '6px',
                  paddingTop: '2px',
                  paddingBottom: '2px',
                }}
              />
              <PopupDesc
                currentCategory={currentCategory}
                onClose={removeCurrentCard}
              />
            </div>
          ) : (
            <div
              data-custom="restrict-click-outside"
              className={`flex items-center text-xl dark:text-gray-300 ${className}`}
            >
              <FaSlackHash className="mr-2 text-gray-600 dark:text-gray-300" />
              <span className="flex uppercase text-gray-900 dark:text-gray-100">
                {subcategoryName}
              </span>
              <button>
                <FaInfoCircle
                  // data-custom="restrict-click-outside"
                  data-tooltip-id="info-tooltip"
                  data-tooltip-content="Description"
                  data-tooltip-place="bottom"
                  className="ml-4 mt-2 text-sm cursor-pointer hover:text-theme-primary outline-none"
                  onClick={handleCardClick}
                />
              </button>
              <Tooltip
                id="info-tooltip"
                style={{
                  backgroundColor: '#8b5cf6',
                  fontSize: '13px',
                  paddingLeft: '6px',
                  paddingRight: '6px',
                  paddingTop: '2px',
                  paddingBottom: '2px',
                }}
              />
              <PopupDesc
                currentCategory={currentCategory}
                onClose={removeCurrentCard}
              />
            </div>
          )}
        </>
      )}
    </>
  )
}
