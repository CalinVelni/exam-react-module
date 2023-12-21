import { useContext } from "react"
import { Link, Navigate } from "react-router-dom";
import LangContext from "../LangContext"

export default function({
    id,
    sex,
    name,
    works,
    imagePath,
    occupation,
    popularity,
}) {

    const lang = useContext(LangContext);
    const t = {
        "en-US": {
            sex: "Gender: ",
            occ: "Occupation: ",
            pop: "Popularity: ",
            known: "Known For: ",  
        },
        "it-IT": {
            sex: "Sesso: ",
            occ: "Occupazione: ",
            pop: "Popolarità: ",
            known: "Conosciuto Per: ",
        }
    }

    return(
        <Link to={`/person/${id}`} className="cardLink">
            <div key={`person${id}`} className="card">
                <h3>{name}</h3>
                <figure>
                    <img src={`https://image.tmdb.org/t/p/w500/${imagePath}`}/>
                </figure>
                <p><span>{t[lang].sex}</span> {sex === 1 ? "F" : "M"}</p>
                <p><span>{t[lang].occ}</span> {occupation}</p>
                <p><span>{t[lang].pop}</span> {popularity}</p>
                <p><span>{t[lang].known}</span></p>
                <ul>
                    {works.map(m => <li key={`movie${m.id}`}>{m.title ? m.title : "TV Series"}</li>)}
                </ul>
            </div>
        </Link>
    )
}