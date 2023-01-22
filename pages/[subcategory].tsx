import { useRouter } from "next/router";
import React from "react";
import { FaSlackHash } from "react-icons/fa";
import Cards from "../components/cards";

const SubCategory = () => {
  const router = useRouter();
  const category = router.asPath.replace("/", "");
  return (
    <section className="md:mt-0 lg:p-0 pt-10 px-5">
      <div className="flex items-center text-3xl my-4 font-bold uppercase dark:text-gray-300">
        <FaSlackHash className="mt-1 mr-2 text-gray-600 dark:text-gray-300" />
        <span className="text-gray-900 dark:text-gray-100">{category}</span>
      </div>
      <Cards />
    </section>
  );
};

export default SubCategory;
