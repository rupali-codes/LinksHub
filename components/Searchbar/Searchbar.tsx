import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchbarProps {
  setSearch: (search: string) => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({ setSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
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
        <div className="relative flex items-center flex-grow">
          <input
            type="text"
            id="simple-search"
            className="block p-2.5 pl-3 w-full bg-transparent text-sm text-gray-900 dark:text-gray-200 border border-dashed border-gray-400 dark:border-gray-600 focus:border-violet-500 dark:focus:border-violet-500 dark:focus:ring-violet-500 focus:ring-violet-500 dark:placeholder-gray-300 transition-all ease-in-out duration-300 rounded-md placeholder-gray-500 font-nunito"
            placeholder="Start Searching..."
            value={searchQuery}
            onChange={handleSearchChange}
            required
            style={{ height: "2.5rem" }}
          />
        </div>
        <button
          type="submit"
          className="ml-2 flex items-center justify-center px-4 py-2 bg-violet-600 text-white rounded-md h-[2.5rem]"
        >
          <FiSearch className="w-5 h-5" />
        </button>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
};
