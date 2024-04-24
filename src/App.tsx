
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";


function App() {
    return (
        <StyledApp className="App">
            <Header/>
            <Main/>
            <Skills/>
        </StyledApp>
    );
}
export default App;

const StyledApp = styled.section`
`
