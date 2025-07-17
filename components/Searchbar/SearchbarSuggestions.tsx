import { SearchOption } from 'types'

interface SuggestionsProps {
  suggestions: SearchOption[]
  onSuggestionClick: (suggestion: SearchOption) => void
  searchQuery?: string
}

interface HighlightedTextProps {
  text: string
  highlight: string
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text, highlight }) => {
  if (!highlight) return <>{text}</>

  const regex = new RegExp(`(${highlight})`, 'gi')
  const parts = text.split(regex)

  return (
    <>
      {parts.map((part, index) => 
        regex.test(part) ? (
          <span key={index} className="bg-white/25 text-yellow-400 dark:text-white dark:bg-yellow-600/50 font-semibold">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  )
}

export const SearchbarSuggestions: React.FC<SuggestionsProps> = ({
  suggestions,
  onSuggestionClick,
  searchQuery = ''
}) => {
  return (
    <ul data-custom='restrict-click-outside' className="absolute z-10 text-light-primary bg-theme-secondary w-full mt-1 rounded-lg shadow-2xl max-h-60 overflow-y-auto">
      {suggestions.map((suggestion, index) => (
        <li
          key={suggestion.url || index}
          className="px-4 py-3 cursor-pointer hover:bg-[rgba(0,0,0,0.2)] capitalize border-b border-gray-600 last:border-b-0 transition-colors duration-150"
          onClick={() => onSuggestionClick(suggestion)}
        >
          <div className="flex flex-col">
            <div className="font-medium">
              <HighlightedText text={suggestion.name} highlight={searchQuery} />
            </div>
            {suggestion.category && (
              <div className="text-xs text-gray-400 mt-1">
                in <HighlightedText text={suggestion.category} highlight={searchQuery} />
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
