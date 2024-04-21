import Link from 'next/link'
import { Icons } from 'components/icons'

interface ComponentProps {
  sections: { name: string; url: string }[]
}
const BreadCrumbs: React.FC<ComponentProps> = ({ sections }) => {
  return (
    <>
      <div className="hidden sm:flex py-3">
        <Link
          href={`/`}
          className="flex gap-x-2 dark:bg-theme-tertiary/50 border border-theme-secondary/25 bg-theme-primary-light/20 dark:border dark:border-theme-primary/8 text-text-primary-light dark:text-text-quaternary text-lg py-0.5 px-2.5 rounded-lg cursor-pointer"
        >
          <Icons.Home className="h-4 w-4 m-auto text-text-primary-light dark:text-text-quaternary" />
          <div>Home</div>
        </Link>
        <div className="text-2xl mx-2.5 font-semibold text-text-secondary-light">
          /
        </div>
        {sections.map((section, i: number) => (
          <Link
            key={i}
            href={section.url}
            className="flex gap-x-2 border border-theme-secondary/25 bg-theme-primary-light/20 dark:bg-theme-tertiary/50 dark:border dark:border-theme-primary/8 text-text-primary-light dark:text-text-quaternary text-lg py-0.5 px-2.5 rounded-lg capitalize cursor-pointer"
          >
            {section.name?.split('-').join(' ')}
          </Link>
        ))}
      </div>
      <div className="flex sm:hidden">
        <Link
          href={`/`}
          className="flex gap-x-2 text-text-quaternary text-lg py-0.5 rounded-lg cursor-pointer my-auto capitalize"
        >
          <Icons.ioChevronBack className="text-text-quinary" />
        </Link>
        <div className="dark:text-text-primary text-1.5xl capitalize font-medium mx-2.5 my-auto">
          {sections[0].name?.split('-').join(' ')}
        </div>
      </div>
    </>
  )
}

export default BreadCrumbs
