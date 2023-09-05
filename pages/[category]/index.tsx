import { useRouter } from 'next/router'
import Logo from 'components/logo/logo'
import { sidebarData } from 'database/data'
import { SubCategories } from 'types'
import Link from 'next/link'

const CategoryPage = () => {
  const router = useRouter()
  const { category } = router.query

  const subcategories: SubCategories[] = []
  sidebarData.forEach((c) => {
    if (c.category == category)
      c.subcategory.forEach((a) => {
        subcategories.push(a)
      })
  })

  return (
    <section className="flex min-h-[calc(100%-68px)] flex-col">
      <div className=" m-auto items-start gap-2">
        <div className="m-auto gap-2 flex flex-col items-center justify-center ">
          <p className="md:text-4xl text-xl uppercase font-bold text-theme-secondary dark:text-gray-text w-fit mx-auto text-center">
            <span className="text-theme-primary">-/</span>
            {category}
          </p>
          <p className="text-xl hidden md:block">
            Get access to all exclusive{' '}
            <span className="border-b-2 border-theme-primary capitalize text-theme-primary">
              {category}
            </span>{' '}
            resources!
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-6 justify-center items-start lg:w-96 mx-auto max-md:w-96">
          {subcategories.map((subcat, i) => (
            <Link
              key={i}
              href={`/${category}${subcat.url}`}
              className={`border-2 dark:border-theme-primary rounded-md bg-transparent dark:text-theme-primary text-text-secondary px-3 py-1 text-md capitalize hover:border-dashed hover:text-light-primary shadow-lg`}
            >
              {subcat.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryPage
