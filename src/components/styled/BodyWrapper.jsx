import styled from 'styled-components';

const StyledBodyWrapper = styled.section`
    display: flex;
    flex-direction: row;
`;

function BodyWrapper({ children }) {
    return <StyledBodyWrapper>{children}</StyledBodyWrapper>;
}

export default BodyWrapper;
