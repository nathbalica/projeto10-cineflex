import styled from "styled-components"
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import Session from "../../components/Session";

export default function SessionsPage() {
    const { idFilme } = useParams();

    const [sessions, setSessions] = useState(undefined)

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then(response => {
                setSessions(response.data)
            })
            .catch(err => {
                console.log(err.response.data);
            });
    }, [])


    if (sessions === undefined) {
        return <div>Carregando...</div>
    }

    return (
        <PageContainer>
            Selecione o horário
            <div>
                {sessions.days.map((session) => (
                    <Session 
                        key={session.id}
                        weekday={session.weekday}
                        date={session.date}
                        showtimes={session.showtimes}
                    />   
                ))}
            </div>
            
            <Footer 
                posterURL={sessions.posterURL}
                title={sessions.title}
            />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`

