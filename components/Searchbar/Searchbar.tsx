interface SearchbarProps {
  setSearch: (search: string) => void;
}

export const Searchbar = ({ setSearch }: SearchbarProps) => {
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <label className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-violet-500 dark:text-violet-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
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
