import  { useEffect, Ref, RefObject } from "react";

interface useSearchShortcutProps  {
    inputRef : RefObject<HTMLInputElement | null>,
}

const useSearchShortcut = ({inputRef} : useSearchShortcutProps) => {
    useEffect(() => {
        const handleSlashKeyPress = (event: KeyboardEvent) => {
          // Check if the pressed key is '/'
          if (event.key === '/') {
            // Prevent the default behavior (e.g., adding '/' to an input field)
            event.preventDefault();
    
            // Focus the input element
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }
        };
    
        // Attach the event listener when the component mounts
        document.addEventListener('keydown', handleSlashKeyPress);
    
        // Detach the event listener when the component unmounts
        return () => {
          document.removeEventListener('keydown', handleSlashKeyPress);
        };
      }, [inputRef]);
}

export default useSearchShortcut