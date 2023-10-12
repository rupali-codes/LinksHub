import { useRouter } from "next/router"
import { useEffect, MutableRefObject } from "react"


const useOnClickOutside = (listRef   : MutableRefObject<HTMLUListElement | null> , handler : () => void) => {
    const router = useRouter()
    useEffect(()=>{
        const handleClickOutside = (e : MouseEvent) => {

            if (e.target && (e.target as HTMLElement).closest('[data-custom=restrict-click-outside]') !== null) {
                return;
            }

            else if(listRef.current && !listRef.current.contains(e.target as Node)){
                handler()
                router.push('/')
            }


        }
        document.addEventListener('click' , handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [listRef, handler, router])
}

export default useOnClickOutside;