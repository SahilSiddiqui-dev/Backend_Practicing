import { useState } from "react";
import {ThemeContext}, UserContext, LanguageContext from "./context";

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState({ name: "John Doe"});
  const [Lang, setLang] = useState("en");
  const toggleTheme = () => {
    setTheme(prev) => prev === "light"? "dark" : "  "
  }