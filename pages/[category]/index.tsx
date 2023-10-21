import { useRouter } from 'next/router'
import Logo from 'components/logo/logo'
import { sidebarData } from 'database/data'
import { SubCategories } from 'types'
import Link from 'next/link'

const CategoryPage = () => {
  const router = useRouter()
  const { category } = router.query as { category: string}

  const subcategories: SubCategories[] = []
  sidebarData.forEach((c) => {
    if (c.category == category)
      c.subcategory.forEach((a) => {
        subcategories.push(a)
      })
  })

  return (
    <section className="flex min-h-[calc(100vh-165px)] flex-col">
      <div className=" m-auto items-start gap-2">
        {subcategories?.length ? (
          <>
            <div className="m-auto gap-2 flex flex-col items-center justify-center ">
              <p className="md:text-4xl text-xl uppercase font-bold text-theme-secondary dark:text-gray-text w-fit mx-auto text-center">
                <span className="text-theme-primary">-/</span>
                {category.split('-').join(' ')}
              </p>
              <p className="text-xl hidden md:block">
                Get access to all exclusive{' '}
                <span className="capitalize text-theme-primary">
                  {category.split('-').join(' ')}
                </span>{' '}
                resources!
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-6 justify-center items-start mx-auto lg:max-w-sm max-md:max-w-sm">
              {subcategories.map((subcat, i) => (
                <Link
                  key={i}
                  href={`/${category}${subcat.url}`}
                  aria-label={`Explore ${subcat.name}`}
                  className={`border-2 dark:border-theme-primary rounded-md bg-transparent dark:text-theme-primary text-text-secondary px-3 py-1 text-md capitalize hover:border-dashed hover:text-dark-primary shadow-lg`}
                >
                  {subcat.name}
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className='text-center'>
            <p className="text-theme-secondary dark:text-gray-text w-fit mx-auto text-center">
              <span className='md:text-7xl text-xl uppercase font-bold '>404|</span> No resources found.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default CategoryPage
