
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";


function App() {
    return (
        <StyledApp className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
        </StyledApp>
    );
}
export default App;

const StyledApp = styled.section`
`
