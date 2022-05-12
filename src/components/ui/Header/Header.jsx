import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from 'styled-components';
import NavBar from './NavBar';

const StyledHeader = styled.header`
    // Layout
    width: 15%;
    position: fixed;
    height: 100vh;

    // Themed Styling
    background-color: ${({ theme }) => theme.headerBackgroundColor};
    border-right: 1px solid ${({ theme }) => theme.borderColor};
`;

function Header() {
    const { theme } = useContext(ThemeContext);

    return (
        <StyledHeader theme={theme.themeData}>
            <NavBar />
        </StyledHeader>
    );
}

export default Header;
