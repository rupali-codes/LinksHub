import { MutableRefObject, useEffect } from 'react';



const useOnClickOutside = (ref : MutableRefObject<HTMLUListElement | null> , handler : () => void ) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
