import styled from 'styled-components';
import { useState, useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

// Components
import ThemeSelectorButton from './ThemeOptions';

// React Icons for themes
import { GiBigWave, GiMoonBats } from 'react-icons/gi';
import { FaRegSun } from 'react-icons/fa';

const ThemeSwitch = styled.section`
    // Layout
    float: right;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    margin: 0.5rem;

    menu {
        // Pop-up Functionality
        display: ${({ display }) => (display === 0 ? 'none' : '')};

        // Layout
        width: 10rem;
        margin: 0.5rem 0;
        padding: 1rem 0.25rem;

        // Design
        border-radius: 5px;

        // Themed Styling
        background-color: ${({ theme }) =>
            theme.themeData.headerBackgroundColor};
        border: 2px solid ${({ theme }) => theme.themeData.textAndBorderColor};
    }
    button {
        // Layout
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.6rem 1rem 0.5rem;

        // Typography
        font-size: 1.6rem;

        // Design
        background-color: transparent;
        border: none;
        border-radius: 5px;

        // Theme Styling
        color: ${({ theme }) => theme.themeData.textAndBorderColor};

        &:hover {
            // Design
            color: yellow;
            background-color: rgba(0, 0, 0, 0.3);
        }
    }
    .toggleMenu {
        // Layout
        width: 175px;

        // Design
        border-radius: 25px;

        // Theme Styling
        border: 2px solid ${({ theme }) => theme.themeData.textAndBorderColor};
    }
    span {
        // Typography
        font-size: 1.2rem;
    }
`;

function ThemeSelector() {
    const { theme } = useContext(ThemeContext);

    const [displayMenu, setDisplayMenu] = useState(0);
    const [menuIcon, setMenuIcon] = useState(<GiBigWave />);

    const handleDisplayMenu = () => {
        setDisplayMenu(displayMenu === 0 ? 1 : 0);
    };

    const handleMenuIcon = (icon) => {
        setMenuIcon(icon);
    };

    return (
        <ThemeSwitch theme={theme} display={displayMenu}>
            <button
                className="toggleMenu"
                htmlFor="theme-select"
                onClick={() => handleDisplayMenu()}
            >
                <span>Theme:</span>
                {menuIcon}
            </button>
            <menu name="theme" id="theme-select">
                {/* Select Dark Theme */}
                <ThemeSelectorButton
                    value="dark"
                    handleDisplayMenu={handleDisplayMenu}
                    icon={<GiMoonBats />}
                    handleMenuIcon={handleMenuIcon}
                >
                    <GiMoonBats />
                    <span>Dark</span>
                </ThemeSelectorButton>

                {/* Select Ocean Theme */}
                <ThemeSelectorButton
                    value="ocean"
                    handleDisplayMenu={handleDisplayMenu}
                    icon={<GiBigWave />}
                    handleMenuIcon={handleMenuIcon}
                >
                    <GiBigWave />
                    <span>Ocean</span>
                </ThemeSelectorButton>

                {/* Select Light Theme */}
                <ThemeSelectorButton
                    value="light"
                    handleDisplayMenu={handleDisplayMenu}
                    icon={<FaRegSun />}
                    handleMenuIcon={handleMenuIcon}
                >
                    {<FaRegSun />}
                    <span>Light</span>
                </ThemeSelectorButton>
            </menu>
        </ThemeSwitch>
    );
}

export default ThemeSelector;
