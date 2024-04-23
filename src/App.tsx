
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";


function App() {
    return (
        <StyledApp className="App">
            <Header/>
            <Main/>
        </StyledApp>
    );
}
export default App;

const StyledApp = styled.section`
`
