import { useRouter } from 'next/router';
import Logo from 'components/logo/logo';
import { sidebarData } from 'database/data';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const subCategoriesNames: string[] = []
  sidebarData.forEach((c) => {
    c.subcategory.forEach((a) => {
      subCategoriesNames.push(a.name.toUpperCase())
    })
  })

  return (
    <section className="flex min-h-[calc(100%-68px)] flex-col">
        <div className=" m-auto flex flex-col  items-start gap-2">
          <div className="m-auto md:text-4xl text-5xl gap-2 flex items-center justify-center">
            <Logo />
            <span>/ {category}</span>
          </div>
          <div className="flex flex-col mt-6 justify-center items-start w-96 max-md:w-64">
          </div>
        </div>
      </section>
  );
};

export default CategoryPage;
