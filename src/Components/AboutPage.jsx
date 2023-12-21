import { useContext } from "react"
import LangContext from "../LangContext"

export default function() {

    const lang = useContext(LangContext);
    const t = {
        'en-US': {
            title: 'About Us',
            desc: 'English Description',
        },
        'it-IT': {
            title: 'Chi Siamo',
            desc: 'Descrizione Italiana',
        },
    };
    
    return(<>

        <h1 className="center-text">{t[lang].title}</h1>
        <p className="just-text">{t[lang].desc}</p>

    </>)
}