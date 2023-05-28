import { useState } from "react";
import SearchIcon from "assets/icons/SearchIcon";

export const Searchbar = ({ setSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setErrorMessage(""); // Clear the error message when the search query is changed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setErrorMessage("Please enter a search query");
    } else {
      setErrorMessage("");
      setSearch(searchQuery);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate> {/* Add the noValidate attribute */}
      <div className="flex items-center">
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="block p-2.5 pl-10 w-full bg-transparent text-sm text-gray-900 dark:text-gray-200 border border-solid border-gray-400 dark:border-gray-600 focus:border-violet-500 dark:focus:border-violet-500 dark:focus:ring-violet-500 focus:ring-violet-500 dark:placeholder-gray-300 outline-none transition-all ease-in-out duration-300 rounded-lg"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            required
          />
        </div>
        <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Search
        </button>
      </div>
      {errorMessage && (
        <p className="text-red-500">{errorMessage}</p>
      )}
    </form>
  );
};
