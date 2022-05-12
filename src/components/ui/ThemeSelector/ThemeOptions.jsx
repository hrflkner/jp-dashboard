//import styled from 'styled-components';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

function ThemeSelectorButton({
    children,
    value,
    handleDisplayMenu,
    icon,
    handleMenuIcon,
}) {
    const { updateTheme } = useContext(ThemeContext);

    const handleClick = () => {
        updateTheme(value);
        handleDisplayMenu();
        handleMenuIcon(icon);
    };
    return <button onClick={() => handleClick()}>{children}</button>;
}

export default ThemeSelectorButton;
