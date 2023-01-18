import { Spinner } from "./Spinner"

export const Preloader = ({backgroundColor, spinnerColor, spinnerSize}:{backgroundColor: string, spinnerColor:string, spinnerSize: number}) => {
    return (
        <div className={`loader ${backgroundColor} fixed top-0 left-0 w-full h-screen flex justify-center items-center`}>
            <Spinner
                spinnerColor={spinnerColor}
                spinnerSize={spinnerSize}
            />
        </div>
    )
}