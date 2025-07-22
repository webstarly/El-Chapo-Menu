import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const getInitialTheme = () =>{
        if( typeof window !== "undefined" && window.localStorage){
            const localTheme = window.localStorage.getItem('theme');
            if(localTheme) return localTheme;

            const useDarkMedia = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if(useDarkMedia) return "dark";
        }
        return "light";
    }
    


    const [ theme, setTheme ] = useState(getInitialTheme);

    useEffect(() =>{
        const root = window.document.documentElement.classList;
        root.remove(theme === "dark" ? 'light' : 'dark');
        root.add(theme);
        localStorage.setItem('theme', theme);
    },[theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };    

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}} >
            { children }
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext (ThemeContext);