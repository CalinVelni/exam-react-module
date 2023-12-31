import { useContext, useEffect, useState} from "react"
import PersonCard from './PersonCard'
import LangContext from "../LangContext";
const apiKey = import.meta.env.VITE_API_KEY;

export default function() {

    const [persons, setPersons] = useState([]);
    const [error, setError] = useState();

    const lang = useContext(LangContext);

    useEffect(() => {
        const query = new URLSearchParams({
            api_key: apiKey,
            language: lang,
        });
        fetch(`https://api.themoviedb.org/3/trending/person/day?${query.toString()}`)
            .then(response => response.json())
            .then(obj => {
                console.log(obj.results);
                setPersons(obj.results)
            })
            .catch(err => {
                console.error(err);
                setError('Error occured, please try again!')
            })
    }, [lang]);

    return (<>
        <h1 className="center-text">Popular Today</h1>
        {error && <h3 className="center-text">{error}</h3>}
        {!error && persons.length === 0 ? 
            <h3 className="center-text">Loading...</h3>
        :
            <section className="cardCont">
                {persons.map(p => {
                    return(
                        <PersonCard
                            key={`pCard${p.id}`}
                            id={p.id}
                            name={p.name}
                            sex={p.gender}
                            works={p.known_for}
                            popularity={p.popularity}
                            imagePath={p.profile_path}
                            occupation={p.known_for_department}
                        />
                    )
                })}
            </section>
        }
    </>)
}