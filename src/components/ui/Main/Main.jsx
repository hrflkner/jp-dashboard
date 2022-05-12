import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from 'styled-components';

const StyledMain = styled.main`
    background-color: ${({ theme }) => theme.bodyBackgroundColor};
    width: 100vw;
    height: 100vh;
    padding: 0.5rem;
    padding-left: 25rem;
`;
function Main({ children }) {
    const { theme } = useContext(ThemeContext);

    return <StyledMain theme={theme.themeData}>{children}</StyledMain>;
}

export default Main;
