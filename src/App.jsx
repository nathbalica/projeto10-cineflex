import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios"
import GlobalStyle from "./style/GlobalStyle"
import ResetStyle from "./style/ResetStyle"
import { useState } from "react"


export default function App() {
    axios.defaults.headers.common['Authorization'] = 'QsZkKxeqN4SfPZuWC2howEgO';
    const [success, setSuccess] = useState([])
    const navigate = useNavigate()
    const location = useLocation();

    const handleBack = () => {
        navigate(-1)
    }

    const isHomePage = location.pathname === "/";

    return (
        <>
            <GlobalStyle />
            <ResetStyle />
            <div>
                <NavContainer>
                    CINEFLEX
                </NavContainer>

                {!isHomePage && (
                    <ButtonBack>
                        <button onClick={handleBack}>
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </button>
                    </ButtonBack>
                )}

                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/sessoes/:idFilme' element={<SessionsPage />} />
                    <Route path='/assentos/:idSessao' element={<SeatsPage setSuccessData={setSuccess} />} />
                    <Route path='/sucesso' element={<SuccessPage success={success} setSuccessData={setSuccess} />} />
                </Routes>
            </div>
        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center; /* Centralizar o texto "CINEFLEX" */
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
`;

const ButtonBack = styled.div`
    position: fixed;
    top: 15px;
    display: flex; /* Adicionar display flex para alinhar o botão e o texto lado a lado */ /* Centralizar verticalmente */
    button {
        margin-left: 20px;
        top: 0px;
        border: none;
        background-color: transparent;
        
    }
    button ion-icon{
        font-size: 30px;
        color: #E8833A;
        cursor: pointer;
    }
`;


