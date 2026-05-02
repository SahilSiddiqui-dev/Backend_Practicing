import { useContext } from "react"
import ThemeContext from "../Context/ThemeContext";
export default function Header() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return(
        <header className= {theme == "dark"? "dark-theme":"light-theme"}> 
            <h1 >TODO APP</h1>
            <div>
                <p>Current Theme: {theme} </p>
                <button onClick={toggleTheme} className={theme == "dark"? "dark-theme":"light-theme"}> Toggle Theme </button>
            </div>
        </header> 
    )
}