import Button from 'components/Button'
import { Icons } from 'components/icons'

export const ReportBug = () => {
  return (
    <div className="hidden md:block absolute right-6 bottom-4 lg:bottom-6 z-20">
      <Button
        label="Report a bug"
        icon={
          <Icons.questionMark className="w-3 h-3 lg:h-4 lg:w-4 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors transition-all duration-300" />
        }
        variant="text"
        link="https://github.com/rupali-codes/LinksHub/issues/new/choose"
        className="text-xs lg:text-sm group hover:text-black border-2 border-gray-400 hover:border-black hover:border-black dark:border-dark dark:hover:text-white transition-all duration-300 bg-white dark:bg-slate-800"
      />
    </div>
  )
}
