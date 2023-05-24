import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios"
import GlobalStyle from "./style/GlobalStyle"
import ResetStyle from "./style/ResetStyle"

export default function App() {
    axios.defaults.headers.common['Authorization'] = 'QsZkKxeqN4SfPZuWC2howEgO';
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <ResetStyle />

                <NavContainer>CINEFLEX</NavContainer>
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/sessoes/:idFilme' element={<SessionsPage />} />
                    <Route path='/assentos/:idSessao' element={<SeatsPage />} />
                    <Route path='/sucesso' element={<SuccessPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
