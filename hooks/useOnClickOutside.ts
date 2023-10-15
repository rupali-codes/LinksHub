import { useEffect, MutableRefObject } from "react"

const useOnClickOutside = (ref   : MutableRefObject<HTMLUListElement | null> , handler : () => void) => {
    useEffect(()=>{
        const handleClickOutside = (e : MouseEvent) => {

            if (e.target && (e.target as HTMLElement).closest('[data-custom=restrict-click-outside]') !== null) {
                return;
            }

            else if(ref.current && !ref.current.contains(e.target as Node)){
                handler()
            }


        }
        document.addEventListener('click' , handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [ref, handler])
}

export default useOnClickOutside;