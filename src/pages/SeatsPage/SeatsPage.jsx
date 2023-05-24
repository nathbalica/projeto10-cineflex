import styled from "styled-components"
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

export default function SeatsPage() {
    const { idSessao } = useParams();

    const [seatsMovie, setSeatsMovie] = useState(undefined)
    const [selectedSeats, setSelectedSeats] = useState([])

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then(response => {
                setSeatsMovie(response.data)
                console.log(response.data.seats)
            })
            .catch(err => {
                console.log(err.response.data);
            });
    }, [])

    if (seatsMovie === undefined) {
        return <div>Carregando...</div>
    }

    const handleSeatClick = (seatId) => {
        const updatedSeats = seatsMovie.seats.map((seat) => {
            if (seat.id === seatId) {
                if (!seat.isAvailable) {
                    return { ...seat, isSelected: !seat.isSelected };
                } else {
                    alert("Esse assento não está disponível");
                }
            }
            return seat;
        });

        setSeatsMovie({ ...seatsMovie, seats: updatedSeats });
    };

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {seatsMovie.seats.map((seat) => (
                    <SeatItem
                        key={seat.id}
                        onClick={() => handleSeatClick(seat.id)}
                        selected={seat.isSelected}
                        available={seat.isAvailable}
                    >
                        {seat.name}
                    </SeatItem>
                ))}
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle status={"selected"} />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle status={"available"} />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle status={"unavailable"} />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer>
                Nome do Comprador:
                <input placeholder="Digite seu nome..." />

                CPF do Comprador:
                <input placeholder="Digite seu CPF..." />

                <button>Reservar Assento(s)</button>
            </FormContainer>

            <FooterContainer>
                <div>
                    <img src={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} alt="poster" />
                </div>
                <div>
                    <p>Tudo em todo lugar ao mesmo tempo</p>
                    <p>Sexta - 14h00</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div` 
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;

    border: 1px solid ${({ status }) => {
        if (status === "selected") return "#0E7D71";
        if (status === "unavailable") return "#F7C52B";
        return "#808F9D";
    }};
  background-color: ${({ status }) => {
        if (status === "selected") return "#1AAE9E";
        if (status === "unavailable") return "#FBE192";
        return "#C3CFD9";
    }};
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;

`
const SeatItem = styled.div`
   border: 1px solid ${({ selected, available }) => {
        if (selected) return "#0E7D71";
        if (available) return "#F7C52B";
        return "#808F9D";
    }};         // Essa cor deve mudar
    background-color: ${({ selected, available }) => {
        if (selected) return "#1AAE9E";
        if (available) return "#FBE192";
        return "#C3CFD9";
    }};   // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`