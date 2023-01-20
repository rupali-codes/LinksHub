import { ThemeToggler } from "../ThemeToggler/themeToggler"

export const TopBar = () => {
    return (
        <div className="flex justify-end">
            <span className="mx-10 py-5">
                <ThemeToggler/>
            </span>
        </div>
    )
}