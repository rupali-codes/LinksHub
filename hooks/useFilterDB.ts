import { database } from "database/data";
import { useRouter } from "next/router";

const useFilterDB = () => {
  const router = useRouter();
  const { subcategory } = router.query;
  // This filters trough the DB with the subcategory which results in an array of arrays
  const filterSubCat = database?.map((item) =>
    item?.filter((cat: any) => cat.subcategory.includes(subcategory))
  );

  // This filters out an empty array from the filterSubCat
  const filterDB = filterSubCat?.filter((item) => item.length !== 0);

  return {
    filterSubCat,
    filterDB: filterDB,
  };
};

export default useFilterDB;
