interface SuggestionsProps {
  suggestions: string[]
  onSuggestionClick: (suggestion: string) => void
}

export const SearchbarSuggestions: React.FC<SuggestionsProps> = ({
  suggestions,
  onSuggestionClick,
}) => {
  return (
    <ul className="absolute z-10 bg-white dark:bg-gray-800 w-full py-2 mt-1 rounded-lg shadow-lg">
      {suggestions.map((suggestion) => (
        <li
          key={suggestion}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => onSuggestionClick(suggestion)}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  )
}
