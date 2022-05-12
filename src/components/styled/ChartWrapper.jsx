import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import styled from 'styled-components';

const StyledChart = styled.section`
    // Layout
    width: max-content;
    padding: 2rem 2rem 1rem 0;

    // Design
    border-radius: 15px;

    // Themed Styling
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    border: 1px solid ${({ theme }) => theme.borderColor};
`;

function ChartWrapper({ children }) {
    const { theme } = useContext(ThemeContext);

    return <StyledChart theme={theme.themeData}>{children}</StyledChart>;
}

export default ChartWrapper;
