import { useContext } from "react"
import ThemeContext from "../Context/ThemeContext";
export default function Footer() {
    const {theme} = useContext(ThemeContext);
    return (
        <footer className={theme == "dark"? "dark-theme":"light-theme"}>
            <h3>© 2026 Developed by Sahil Siddiqui with Love </h3>
        </footer>
    )
}