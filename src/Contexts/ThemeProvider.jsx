import { useEffect, useState } from "react"
import ThemeContext from "./Theme";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeProvider = ({ children }) => {
    const { state: theme, setValue: setTheme } = useLocalStorage('theme', 'light');

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    }

    useEffect(() => {
        document.documentElement.className = theme
    }, [theme]);

    return (
        <ThemeContext value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext>
    )
}

export { ThemeProvider }