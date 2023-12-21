import { useContext, useState } from "react"
import LangContext from "../LangContext"

export default function({handleSearch}) {

    const [inpValue, setInpValue] = useState('');
    const lang = useContext(LangContext);
    const t = {
        "en-US": {
            btn: "Search"
        },
        "it-IT": {
            btn: "Cerca"
        }
    }



    return(
    <nav className="searchbar">
        <input 
            type="text" 
            value={inpValue}
            onChange={e => setInpValue(e.target.value)}
        />
        <button
            onClick={() => handleSearch(inpValue)}
        >{t[lang].btn}</button>
    </nav>
    )
}