import styled from "styled-components"
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Caption from "../../components/Caption";
import Footer from "../../components/Footer";
import Seat from "../../components/Seat";

export default function SeatsPage() {
    const { idSessao } = useParams();

    const [seatsMovie, setSeatsMovie] = useState(undefined)
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then(response => {
                setSeatsMovie(response.data)
                console.log(response.data)
            })
            .catch(err => {
                console.log(err.response.data);
            });
    }, [])

    if (seatsMovie === undefined) {
        return <div>Carregando...</div>
    }

    const handleSeatClick = (seatId) => {
        const seat = seatsMovie.seats.find((seat) => seat.id === seatId);

        if (!seat.isAvailable) {
          alert("Esse assento não está disponível");
          return; // Não faz nada se o assento não estiver disponível
        }
      
        const isSelected = selectedSeats.includes(seatId);
    
        if (isSelected) {
          const updatedSeats = selectedSeats.filter(id => id !== seatId);
          setSelectedSeats(updatedSeats);
        } else {
          setSelectedSeats([...selectedSeats, seatId]);
        }
      };

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {seatsMovie.seats.map((seat) => (
                    <Seat 
                        key={seat.id}
                        handleSeat={() => handleSeatClick(seat.id)}
                        seat={seat}
                        isSelected={selectedSeats.includes(seat.id)}
                    />
                    // <SeatItem
                    //     key={seat.id}
                    //     onClick={() => handleSeatClick(seat.id)}
                    //     isSelected={selectedSeats.includes(seat.id)}
                    // >
                    //     {seat.name}
                    // </SeatItem>
                ))}
            </SeatsContainer>

            <Caption />

            <FormContainer>
                Nome do Comprador:
                <input placeholder="Digite seu nome..." />

                CPF do Comprador:
                <input placeholder="Digite seu CPF..." />

                <button>Reservar Assento(s)</button>
            </FormContainer>
            
            <Footer 
                posterURL={seatsMovie.movie.posterURL}
                title={seatsMovie.movie.title}
                weekday={seatsMovie.day.weekday}
                hour={seatsMovie.name}
            />
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
