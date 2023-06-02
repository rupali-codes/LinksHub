import React, { useState } from "react";
import SearchIcon from "assets/icons/SearchIcon";

interface SearchbarProps {
  setSearch: (search: string) => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({ setSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setErrorMessage("Please enter a search query");
    } else {
      setErrorMessage("");
      setSearch(searchQuery);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex items-center">
        <div className="relative flex items-center">
          {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          </div> */}
          <input
            type="text"
            id="simple-search"
            className="block p-2.5 w-full bg-transparent text-sm text-gray-900 dark:text-gray-200 border border-dashed border-gray-400 dark:border-gray-500 focus:border-violet-500 dark:focus:border-violet-500 dark:focus:ring-violet-500 focus:ring-violet-500 dark:placeholder-gray-400 outline-none transition-all ease-in-out duration-300 rounded-lg"
            placeholder="Start searching..."
            value={searchQuery}
            onChange={handleSearchChange}
            required
          />
        </div>
        <button type="submit" className="ml-2 px-4 py-2.5 bg-violet-500 text-white rounded-md border border-dashed border-transparent hover:border-violet-400 hover:bg-transparent hover:text-violet-400 dark:hover:text-violet-400">
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>
      {errorMessage && (
        <p className="text-red-500">{errorMessage}</p>
      )}
    </form>
  );
};
