import { SubCategories } from 'types'

interface SuggestionsProps {
  suggestions: SubCategories[]
  onSuggestionClick: (suggestion: SubCategories) => void
}

export const SearchbarSuggestions: React.FC<SuggestionsProps> = ({
  suggestions,
  onSuggestionClick,
}) => {
  return (
    <ul data-custom='restrict-click-outside' className="absolute z-10 text-light-primary bg-theme-secondary w-full mt-1 rounded-lg shadow-2xl">
      {suggestions.map((suggestion) => (
        <li
          key={suggestion.url}
          className="px-4 py-2 cursor-pointer hover:bg-[rgba(0,0,0,0.2)] capitalize"
          onClick={() => onSuggestionClick(suggestion)}
        >
          {suggestion.name}
        </li>
      ))}
    </ul>
  )
}
