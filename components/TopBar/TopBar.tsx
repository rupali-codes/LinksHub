import { FC } from 'react'
import { useRouter } from 'next/router'
import { FaSlackHash } from 'react-icons/fa'

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
      <span className="font-semmibold uppercase text-gray-900 dark:text-gray-100">
        {category.split('-').join(' ')}
      </span>
    </div>
  )
}
