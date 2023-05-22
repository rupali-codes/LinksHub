import SearchIcon from "assets/icons/SearchIcon";
import { ChangeEvent, useState } from "react";
import { SearchbarProps } from "types";

export const Searchbar = ({ setSearch }: SearchbarProps) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setSearch(value);
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setSearch(suggestion);
    setSuggestions([]);
  };

  const getSuggestions = (value: string) => {
    const suggestions = [
      "Animation",
      "Images",
      "Icons",
      "React Js",
      "Illustrations",
      "Colors",
      "CSS",
      "Fonts",
      "Animations",
      "Testing",
      "Themes",
      "Templates",
      "Design",
      " Inspiration",
      "Validation",
      "Security",
      "Authentication",
      "Caching",
      "UI Generators" ,
      "Validation",
      "COMPUTER",
      "Science",
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
      "Opensource",
      "Blogs",
      "Projects",
      "E-Book",
    ];

    const inputValueLowercase = value.toLowerCase();
    const startsWithSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion
          .toLowerCase()
          .startsWith(inputValueLowercase.split(" ")[0])
    );
    const includesSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion
          .toLowerCase()
          .includes(inputValueLowercase) &&
        !startsWithSuggestions.includes(suggestion)
    );

    const sortedSuggestions = [
      ...startsWithSuggestions,
      ...includesSuggestions,
    ];

    return sortedSuggestions;
  };

  const getVisibleValue = () => {
    if (suggestions.length > 0) {
      const suggestion = suggestions[0];
      const suggestionParts = suggestion.split(" ");
      const firstWord = suggestionParts[0];

      if (inputValue.includes(" ")) {
        const inputParts = inputValue.split(" ");
        const typedFirstWord = inputParts[0];

        if (firstWord.toLowerCase() === typedFirstWord.toLowerCase()) {
          const remainingSuggestion = suggestionParts.slice(1).join(" ");
          return `${typedFirstWord} ${remainingSuggestion}`;
        }
      }
    }

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
          required
        />
        {suggestions.length > 0 && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <span className="text-gray-500 text-sm">
              {inputValue}
              <span className="text-gray-400 pl-1">
                {suggestions[0].slice(inputValue.length)}
              </span>
            </span>
          </div>
        )}
      </div>
    </>
  );
};
