interface LangButtonProps {
    lang: string;
    changeLang: () => void
}

export const LangButton = ({ lang, changeLang } : LangButtonProps) => {
    return (
        <button className="hover:underline"
            onClick={changeLang}>
            <img className="w-10"
                src={lang === 'en' ? './../uk.png' : './../spain.png'} 
                alt={lang === 'en' ? 'en' : 'es'}/>
        </button>
    )
} 