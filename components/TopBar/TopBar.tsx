import { FC } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { FaSlackHash, FaInfoCircle } from 'react-icons/fa'
import categoryDescriptions from './CategoryDescriptions'
import { Tooltip } from 'react-tooltip'
import { isValidResource, regEx } from './utils'

interface TopBarProps {
  className?: string
}

export const TopBar: FC<TopBarProps> = ({ className }) => {
  const router = useRouter()
  const { theme } = useTheme()

  const category = router.asPath
  const categoryName = category.split('/')[1].split('-').join(' ')
  const subcategoryName = category?.split('/')[2]?.split('-').join(' ')
  const searchQuery = router.query.query?.toString() || ''

  let cleanedCategory = ''
  cleanedCategory = (subcategoryName || categoryName)
    .replaceAll(regEx, ' ')
    .replaceAll('search query ', '')

  const description = categoryDescriptions[searchQuery || subcategoryName] || ''
  const isResourceSelected = isValidResource(searchQuery || subcategoryName)

  if (router.pathname.length === 1) return null
  return isResourceSelected ? (
    <div
      className={`flex items-center text-xl dark:text-gray-300 ${className}`}
    >
      <FaSlackHash className="mr-2 text-gray-600 dark:text-gray-300" />
      <span className="flex uppercase text-gray-900 dark:text-gray-100">
        {cleanedCategory}
      </span>
      <button>
        <FaInfoCircle
          data-tooltip-id="info-tooltip"
          data-tooltip-place="bottom"
          data-tooltip-content={description}
          className="ml-4 mt-2 text-sm cursor-pointer hover:text-theme-primary"
        />
      </button>
      <Tooltip
        id="info-tooltip"
        opacity="1"
        style={{
          backgroundColor: '#8b5cf6',
          fontSize: '13px',
          paddingLeft: '6px',
          paddingRight: '6px',
          paddingTop: '2px',
          paddingBottom: '2px',
          width: 'calc(100vw - 2rem)',
          maxWidth: '400px',
          boxShadow:
            theme === 'light'
              ? '0 0 8px #bdbdbd'
              : '0 0 0 2px rgba(189, 189, 189, 0.25)',
        }}
      />
    </div>
  ) : null
}
