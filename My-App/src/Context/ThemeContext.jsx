import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}) {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if(theme == "light"){
            setTheme("dark");
        }
        else {
            setTheme("light")
        }
    };
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
    );

 }
 export default ThemeContext;
 