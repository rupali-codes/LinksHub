import SearchIcon from "assets/icons/SearchIcon";
import { ChangeEvent } from "react";
import { SearchbarProps } from "types";

export const Searchbar = ({ setSearch }: SearchbarProps) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="w-5 h-5 text-violet-500 dark:text-violet-500" />
        </div>
        <input
          type="text"
          id="simple-search"
          className="block p-2.5 pl-10 w-full bg-transparent text-sm text-gray-900 dark:text-gray-200 border border-solid border-gray-400 dark:border-gray-600 focus:border-violet-500 dark:focus:border-violet-500 dark:focus:ring-violet-500 focus:ring-violet-500 dark:placeholder-gray-400 outline-none transition-all ease-in-out duration-300 rounded-lg"
          placeholder="Search"
          onChange={handleSearch}
          required
        />
      </div>
    </>
  );
};
