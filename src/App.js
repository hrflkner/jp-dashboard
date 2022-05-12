// Global Styles
import './App.css';

// Global State
import { ThemeContextProvider } from './components/context/ThemeContext';

// Styled Components
import BodyWrapper from './components/styled/BodyWrapper';
import ChartWrapper from './components/styled/ChartWrapper';

// Components
import Header from './components/ui/Header/Header';
import ThemeSwitch from './components/ui/ThemeSelector/ThemeSelector';
import Main from './components/ui/Main/Main';
import LineChart from './components/charts/LineCharts.jsx';

export default function App() {
    return (
        <ThemeContextProvider>
            <BodyWrapper>
                <Header />
                <Main>
                    <ThemeSwitch />
                    <ChartWrapper>
                        <LineChart />
                    </ChartWrapper>
                </Main>
            </BodyWrapper>
        </ThemeContextProvider>
    );
}
