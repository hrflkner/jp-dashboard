import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from 'styled-components';

const StyledNav = styled.nav`
    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
    }
    li {
        color: black;
        text-decoration: none;
    }
    a {
        display: inline-block;
        font-size: 1.8rem;
        color: ${({ theme }) => theme.linkColor};
        text-decoration: none;
        padding: 1rem 2rem;

        &:hover {
            color: ${({ theme }) => theme.linkColorOnHover};
        }
    }
`;

function NavBar() {
    const { theme } = useContext(ThemeContext);

    return (
        <StyledNav theme={theme.themeData}>
            <ul>
                <li>
                    <a href="/">Dashboard</a>
                </li>
                <li>
                    <a href="/">Stocks</a>
                </li>
                <li>
                    <a href="/">Analysis</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Copyright</a>
                </li>
            </ul>
        </StyledNav>
    );
}

export default NavBar;
