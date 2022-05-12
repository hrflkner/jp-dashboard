import { useState, createContext } from 'react';
import LightTheme from '../themes/LightTheme';
import DarkTheme from '../themes/DarkTheme';
import OceanTheme from '../themes/OceanTheme';

const ThemeSettings = {
    light: LightTheme,
    dark: DarkTheme,
    ocean: OceanTheme,
};

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        id: 'dark',
        themeData: ThemeSettings['ocean'],
    });

    console.log(theme.themeData);

    const updateTheme = (x) => {
        setTheme({ id: `${x}`, themeData: ThemeSettings[`${x}`] });
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                updateTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
