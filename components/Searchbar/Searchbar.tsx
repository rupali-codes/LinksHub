import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import SearchIcon from "assets/icons/SearchIcon";
import { SearchbarProps } from "types";

export const Searchbar = ({ setSearch }: SearchbarProps) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setSearch(value);
    setSuggestions(getSuggestions(value));
    setShowDropdown(true);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setShowDropdown(false);
      setInputValue(suggestions[activeSuggestion] || inputValue);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveSuggestion((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setSearch(suggestion);
    setSuggestions([]);
    setShowDropdown(false);
  };

  const getSuggestions = (value: string) => {
    const allSuggestions = [
      "Animation",
    "Images",
    "Icons",
    "React Js",
    "Illustrations",
    "Colors",
    "CSS",
    "Fonts",
    "Testing",
    "Themes & Templates",
    "Design Inspiration",
    "Validation",
    "Security",
    "Authentication",
    "Caching",
    "UI Generators",
    "Computer Science",
    "Authentication",
    "Caching",
    "System Design",
    "Online Code Editors",
    "Web Development",
    "Machine Learning",
    "Tensorflow",
    "DSA",
    "Android",
    "Blogs",
    "Hosting",
    "Web3 & Metaverse",
    "Github",
    "Devtools",
    "Javascript",
    "Python",
    "Golang",
    "Open Source Blogs",
    "Projects",
    "E-Book",
    ];

    const inputValueLowercase = value.toLowerCase();
    const startsWithSuggestions = allSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().startsWith(inputValueLowercase)
    );
    const includesSuggestions = allSuggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().includes(inputValueLowercase) &&
        !startsWithSuggestions.includes(suggestion)
    );
    const sortedSuggestions = [...startsWithSuggestions, ...includesSuggestions];

    return value ? sortedSuggestions.slice(0, 3) : [];
  };

  const getVisibleValue = () => {
   
    return inputValue;
  };

  return (
    <>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
        </div>
        <input
          type="text"
          id="simple-search"
          className="block p-2.5 pl-10 w-full bg-transparent text-sm text-gray-900 dark:text-gray-200 border border-solid border-gray-400 dark:border-gray-600 focus:border-violet-500 dark:focus:border-violet-500 dark:focus:ring-violet-500 focus:ring-violet-500 dark:placeholder-gray-300 outline-none transition-all ease-in-out duration-300 rounded-lg"
          placeholder="Search"
          value={getVisibleValue()}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setShowDropdown(false)}
          required
        />
        {showDropdown && suggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg">
            {suggestions.map((suggestion, index) => (
              <div
                key={suggestion}
                className={`px-4 py-2 cursor-pointer ${
                  index === activeSuggestion ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
