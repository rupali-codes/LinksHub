import { useRouter } from 'next/router'
import Logo from 'components/logo/logo'
import { sidebarData } from 'database/data'
import { SubCategories } from 'types'
import Link from 'next/link'
import { MdOutlineAdd } from 'react-icons/md'
import AddIcon from 'assets/icons/AddIcon'
import ArrowIcon from 'assets/icons/ArrowIcon'
import BreadCrumbs from 'components/Breadcrumps'
import MessageIcon from 'assets/icons/MessageIcon'

const CategoryPage = () => {
  const router = useRouter()
  const { category } = router.query as { category: string }

  const subcategories: SubCategories[] = category
    ? sidebarData.filter((c) => c.category == category)[0]['subcategory']
    : []

  return (
    <section className="flex min-h-[calc(100vh-165px)] flex-col">
      <div className=" m-auto items-start gap-2">
        {subcategories?.length ? (
          <>
            <div className="flex mt-8 justify-between	">
              <BreadCrumbs
                sections={[{ name: category, url: `/${category}` }]}
              />
              <div className="flex my-auto gap-x-3">
                <MessageIcon />
                <div className="text-md text-text-quinary">Give a feedback</div>
              </div>
            </div>
            <div className="flex w-1038 justify-center">
              <div className="flex flex-wrap gap-x-9 gap-y-5 mt-8 mb-28 flex-start items-start">
                {subcategories.map((subcat, i) => (
                  <Link
                    key={i}
                    href={`/${category}${subcat.url}`}
                    aria-label={`Explore ${subcat.name}`}
                    className={`flex border dark:border-theme-primary dark:border-opacity-8 rounded-xl bg-theme-tertiary  hover:bg-theme-quaternary hover:bg-opacity-25	 px-3 py-1 dark:hover:border-opacity-25 hover:text-dark-primary shadow-lg lg:max-w-xs max-md:max-w-xs px-4 py-4 group`}
                  >
                    <div>
                      <div
                        className={`dark:text-text-primary text-lg capitalize font-semibold	`}
                      >
                        {' '}
                        {subcat.name}
                      </div>
                      <div
                        className={`dark:text-text-tertiary text-md font-medium w-10/12 h-12	overflow-y-hidden`}
                      >
                        Explore {subcat.name} resources for learning and growth.
                      </div>
                    </div>

                    <ArrowIcon className="w-8 dark:text-text-primary hidden group-hover:block" />
                  </Link>
                ))}
                <Link
                  href={`/`}
                  aria-label={`Add`}
                  className={`flex gap-x-2 border dark:border-theme-primary dark:border-opacity-8 rounded-xl bg-theme-secondary px-3 py-1 hover:border-dashed hover:text-dark-primary shadow-lg lg:max-w-xs max-md:max-w-xs px-4 py-4`}
                >
                  <AddIcon className="w-8 dark:text-text-primary" />

                  <div>
                    <div className="text-xl font-semibold dark:text-text-primary">
                      {' '}
                      Wanna add something?
                    </div>
                    <div
                      className={`dark:text-text-primary text-md font-medium w-10/12	opacity-75`}
                    >
                      Share resources, and help other fellows in the journey.{' '}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-theme-secondary dark:text-gray-text w-fit mx-auto text-center">
              <span className="md:text-7xl text-xl uppercase font-bold ">
                404|
              </span>{' '}
              No resources found.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default CategoryPage
