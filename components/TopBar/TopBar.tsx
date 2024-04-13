import { FC } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { RxSlash } from 'react-icons/rx'
import HomeIcon from 'assets/icons/svg/HomeIcon.svg'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io'
import categoryDescriptions from './CategoryDescriptions'
import { isValidResource, regEx } from './utils'
import Link from 'next/link'
import CardTooltip from 'components/CardTooltip/CardTooltip'
interface TopBarProps {
  className?: string
}

export const TopBar: FC<TopBarProps> = ({}) => {
  const router = useRouter()
  const { theme } = useTheme()

  const category = router.asPath
  const categoryNameLink = category?.split('/')[1]
  const categoryName = category?.split('/')[1]?.split('-').join(' ')
  const subcategoryName = category?.split('/')[2]?.split('-').join(' ')

  const searchQuery = router.query.query?.toString() || ''

  let cleanedCategory = ''
  cleanedCategory = (subcategoryName || categoryName)
    .replaceAll(regEx, ' ')
    .replaceAll('search query ', '')

  // Helper function to capitalize the first letter of each word
  const capitalizeEachWord = (str: string) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const description = categoryDescriptions[searchQuery || subcategoryName] || ''
  const isResourceSelected = isValidResource(searchQuery || subcategoryName)

  if (router.pathname.length === 1) return null
  return isResourceSelected ? (
    <div
      className={`flex items-center justify-between md:justify-start text-md dark:text-gray-300 gap-x-2 md:px-10 py-8`}
    >
      <Link
        href={'/'}
        className="gap-x-2 items-center border border-theme-secondary/25 bg-theme-primary-light/20 bg-opacity-20 dark:bg-theme-tertiary/50 dark:border dark:border-theme-primary/8 px-[10px] py-[6px] rounded-md cursor-pointer hidden md:flex"
      >
        <HomeIcon className="m-auto fill-text-primary-light dark:fill-text-quaternary" />
        <h3>Home</h3>
      </Link>
      <RxSlash className="hidden md:inline-block" />
      <Link
        href={'/' + categoryNameLink}
        className="bg-theme-primary-light/20 border border-theme-secondary/25 dark:bg-theme-tertiary/50 dark:border dark:border-theme-primary/8 px-[10px] py-[6px] rounded-md cursor-pointer hidden md:inline-block"
      >
        <h3>{capitalizeEachWord(categoryName)}</h3>
      </Link>
      <RxSlash className="hidden md:inline-block" />
      <Link href={'/' + categoryNameLink} className="flex gap-x-2 items-center">
        <IoIosArrowBack className="md:hidden" />
      </Link>
      <div className="md:bg-theme-primary-light/20 border border-theme-secondary/25 dark:bg-theme-tertiary/50 dark:border dark:border-theme-primary/8 px-[10px] py-[6px] text-xl md:text-base rounded-md truncate ...">
        <h3>{capitalizeEachWord(cleanedCategory)}</h3>
      </div>
      <button>
        <FaInfoCircle
          data-tooltip-id="info-tooltip"
          data-tooltip-place="bottom"
          data-tooltip-content={description}
          size={30}
          className=" ml-2 border border-theme-secondary/25 text-sm cursor-pointer bg-[#EDEDED] bg-opacity-20 dark:bg-theme-tertiary/75 dark:border dark:border-theme-primary/8 p-2 rounded-md "
        />
      </button>
      <CardTooltip theme={theme} />
    </div>
  ) : null
}
