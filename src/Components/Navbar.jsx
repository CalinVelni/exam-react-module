import { NavLink } from "react-router-dom";

export default function({handleChange, langValue}) {
    return(
        <nav className="navbar">
            <menu>
                <li>
                    <NavLink to="/" className="link" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/search" className="link" >Search</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="link" >About</NavLink>
                </li>
            </menu>
            <div>
                <select
                    onChange={e => handleChange(e.target.value)}
                    value={langValue}
                >
                    <option value="en-US">🇬🇧</option>
                    <option value="it-IT">🇮🇹</option>
                </select>
            </div>
        </nav>
    )
}