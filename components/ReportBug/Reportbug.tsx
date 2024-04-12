import Button from 'components/Button'
import { Icons } from 'components/icons'

export const ReportBug = () => {
  return (
    <div className="hidden md:block absolute right-6 bottom-4 lg:bottom-6 z-20">
      <Button
        label="Report a bug"
        icon={
          <Icons.questionMark className="w-3 h-3 lg:h-4 lg:w-4 text-gray-200 group-hover:text-white" />
        }
        variant="text"
        link="https://github.com/rupali-codes/LinksHub/issues/new/choose"
        className="text-xs lg:text-sm group text-gray-200 hover:text-white border-2 border-primary hover:border-primary dark:text-gray-200 dark:hover:text-white bg-primary"
      />
    </div>
  )
}
