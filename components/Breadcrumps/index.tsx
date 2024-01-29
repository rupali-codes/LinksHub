import HomeIcon from 'assets/icons/svg/HomeIcon.svg'
import Link from 'next/link'
import { IoChevronBack } from 'react-icons/io5'

interface ComponentProps {
  sections: { name: string; url: string }[]
}
const BreadCrumbs: React.FC<ComponentProps> = ({ sections }) => {
  return (
    <>
      <div className="hidden sm:flex py-3">
        <Link
          href={`/`}
          className="flex gap-x-2 bg-theme-quinary bg-opacity-20 text-text-primary-light dark:text-text-quaternary text-lg py-0.5 px-2.5 rounded-lg cursor-pointer"
        >
          <HomeIcon className="m-auto fill-text-primary-light dark:fill-text-quaternary" />
          <div>Home</div>
        </Link>
        <div className="text-2xl mx-2.5 font-semibold text-text-secondary-light">
          /
        </div>
        {sections.map((section, i: number) => (
          <Link
            key={i}
            href={section.url}
            className="flex gap-x-2 bg-theme-quinary bg-opacity-20 text-text-primary-light dark:text-text-quaternary text-lg py-0.5 px-2.5 rounded-lg capitalize cursor-pointer"
          >
            {section.name}
          </Link>
        ))}
      </div>
      <div className="flex sm:hidden">
        <Link
          href={`/`}
          className="flex gap-x-2 text-text-quaternary text-lg py-0.5 rounded-lg cursor-pointer my-auto capitalize"
        >
          <IoChevronBack className="text-text-quinary" />
        </Link>
        <div className="dark:text-text-primary text-1.5xl capitalize font-medium mx-2.5 my-auto">
          {sections[0].name}
        </div>
      </div>
    </>
  )
}

export default BreadCrumbs
