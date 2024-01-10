import { FC } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { RxSlash } from 'react-icons/rx'
import { TiHomeOutline } from 'react-icons/ti'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io'
import categoryDescriptions from './CategoryDescriptions'
import { Tooltip } from 'react-tooltip'
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
  const categoryName = category.split('/')[1].split('-').join(' ')
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
        className="gap-x-2 items-center bg-[#EDEDED] bg-opacity-20 px-[10px] py-[6px] rounded-md cursor-pointer hidden md:flex"
      >
        <TiHomeOutline />
        <h3>Home</h3>
      </Link>
      <RxSlash className="hidden md:inline-block" />
      <Link
        href={'/' + categoryName}
        className="bg-[#EDEDED] bg-opacity-20 px-[10px] py-[6px] rounded-md cursor-pointer hidden md:inline-block"
      >
        <h3>{capitalizeEachWord(categoryName)}</h3>
      </Link>
      <RxSlash className="hidden md:inline-block" />
      <Link href={'/' + categoryName} className="flex gap-x-2 items-center">
        <IoIosArrowBack className="md:hidden" />
        <div className="md:bg-[#EDEDED] md:bg-opacity-20 px-[10px] py-[6px] rounded-md ">
          <h3>{capitalizeEachWord(cleanedCategory)}</h3>
        </div>
      </Link>
      <button>
        <FaInfoCircle
          data-tooltip-id="info-tooltip"
          data-tooltip-place="bottom"
          data-tooltip-content={description}
          size={30}
          className=" ml-2 text-sm cursor-pointer bg-[#EDEDED] bg-opacity-20 p-2 rounded-md "
        />
      </button>
      <CardTooltip theme={theme} />
    </div>
  ) : null
}
