import HomeIcon from 'assets/icons/HomeIcon'
import Link from 'next/link'

const BreadCrumbs = ({ sections }) => {
  return (
    <div className="flex">
      <Link
        href={`/`}
        className="flex gap-x-2 bg-theme-quinary bg-opacity-20 text-text-quaternary text-lg py-0.5 px-2.5 rounded-lg cursor-pointer	"
      >
        <HomeIcon />
        <div>Home</div>
      </Link>
      <div className="text-2xl	mx-2.5 font-semibold varela">/</div>
      {sections.map((section, i) => (
        <Link
          href={section.url}
          className="flex gap-x-2 bg-theme-quinary bg-opacity-20 text-text-quaternary text-lg py-0.5 px-2.5 rounded-lg capitalize cursor-pointer	"
        >
          {section.name}
        </Link>
      ))}
    </div>
  )
}

export default BreadCrumbs
