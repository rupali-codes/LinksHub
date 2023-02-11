import SearchIcon from "assets/icons/SearchIcon";
import { SearchbarProps } from "types";

export const Searchbar = ({ setSearch }: SearchbarProps) => {
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <label className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="w-5 h-5 text-violet-500 dark:text-violet-500" />
        </div>
        <input
          type="text"
          id="simple-search"
          className=" border bg-transparent border-gray-400 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:border-gray-600  
          dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-violet-500 dark:focus:border-violet-500 focus:ring-violet-500 focus:border-violet-500 outline-none ease-in-out duration-300 "
          placeholder="Search"
          onChange={handleSearch}
          required
        />
      </div>
    </>
  );
};
