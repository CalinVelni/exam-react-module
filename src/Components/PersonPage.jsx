import { useContext, useEffect, useState} from "react"
import { Navigate, useParams } from "react-router-dom";
import LangContext from "../LangContext";
const apiKey = import.meta.env.VITE_API_KEY;

export default function() {

    const [p, setP] = useState();
    const { id } = useParams();
    const lang = useContext(LangContext);
    const t = {
        "en-US": {
            name:"Name: ",
            sex: "Gender: ",
            occ: "Occupation: ",
            age: "Age: ",
        },
        "it-IT": {
            name:"Name: ",
            sex: "Sesso: ",
            age: "Età: ",
            occ: "Occupation: ",
        }
    }

    useEffect(() => {
        const query = new URLSearchParams({
            api_key: apiKey,
            language: lang
        });
        fetch(`https://api.themoviedb.org/3/person/${id}?${query.toString()}`)
            .then(response => response.json())
            .then(obj => {setP(obj) ;console.log(obj)})
            .catch(err => console.error(err))
    }, [lang])

    return(<>
        {id === undefined && <Navigate to={"/"}/>}
        {!p ? 
            <h3 className="center-text">Loading...</h3>
        :
            <section className="personPage">
                <div>
                    {p.name}
                    <figure>
                        <img src={`https://image.tmdb.org/t/p/w500/${p.profile_path}`}/>
                    </figure>
                    <p>{t[lang].name} {p.name}</p>
                    <p>{t[lang].sex} {p.gender === 1 ? "F" : "M"}</p>
                    <p>{t[lang].age} {p.bithday}</p>
                    <p>{t[lang].occ} {p.known_for_department}</p>
                    <p>{p.biography}</p>
                </div>
            </section>
        }
    </>)
}