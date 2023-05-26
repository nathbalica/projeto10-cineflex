import styled from "styled-components"
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Caption from "../../components/Caption";
import Footer from "../../components/Footer";
import Seat from "../../components/Seat";
import FormUser from "../../components/FormUser";

export default function SeatsPage({setSuccessData}) {
    const { idSessao } = useParams();

    const [seatsMovie, setSeatsMovie] = useState(undefined)
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then(response => {
                setSeatsMovie(response.data)
            })
            .catch(err => {
                console.log(err.response.data);
            });
    }, [])


    if (seatsMovie === undefined) {
        return <div>Carregando...</div>
    }

    const handleSeatClick = (seatParam) => {
        if (!seatParam.isAvailable) {
          alert("Esse assento não está disponível");
          return; 
        }
      
        const isSelected = selectedSeats.some((s) => s.id === seatParam.id);
      
        if (isSelected) {
          const updatedSeats = selectedSeats.filter((s) => s.id !== seatParam.id);
          setSelectedSeats(updatedSeats);
        } else {
          setSelectedSeats([...selectedSeats, seatParam]);
        }
      };
      console.log(selectedSeats)

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {seatsMovie.seats.map((seat) => (
                    <Seat 
                    key={seat.id}
                    handleSeat={() => handleSeatClick(seat)}
                    seat={seat}
                    isSelected={selectedSeats.some((s) => s.id === seat.id)}
                    />
                    ))}
            </SeatsContainer>

            <Caption />
            
            <FormUser 
                setSuccessData={setSuccessData}
                selectedSeats={selectedSeats}
                session={seatsMovie}
            />

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
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
    form{
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`
