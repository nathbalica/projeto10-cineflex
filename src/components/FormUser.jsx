import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { validator } from "../utils/validator"
import {formatCPF} from "../utils/formatCPF"

export default function FormUser({ session, selectedSeats, setSuccessData }) {

    const [cpf, setCpf] = useState({cpf: ''});
    const [nome, setNome] = useState({name: ''})
    const [disable, setDisable] = useState(true)
    const [cpfInvalid, setCpfInvalid] = useState(false);
    const navigate = useNavigate()

    
    useEffect(() => {
        if (nome.name && cpf.cpf && selectedSeats.length > 0) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [nome, cpf, selectedSeats])

    const validateCPF = () => {
        const cpfDigits = cpf.cpf.replace(/\D/g, "");
    
        if (!validator(cpfDigits)) {
          setCpfInvalid(true); 
          return false;
        }
        setCpfInvalid(false);
        return true;
      };

    const bookSeat = (event) => {

        event.preventDefault()

        if (!validateCPF()) {
            return;
        }
        const idsSeats = selectedSeats.map((seat) => seat.id)
        const requestData = {
            ids: idsSeats,
            name: nome.name,
            cpf: cpf.cpf.replace(/\D/g, '')
        };

        console.log(requestData)
        const requisicao = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", requestData)
        requisicao.then(res => {
            const data = {
                movie: session.movie.title,
                date: session.day.date,
                hour: session.name,
                client: nome.name,
                cpf: cpf.cpf.replace(/\D/g, ""),
                seats: selectedSeats.map((item) => item.name)
            }

            setSuccessData(data)
            navigate("/sucesso")
        })
        requisicao.catch(err => alert(err.response.data.message))
    }

    return (
        <FormContainer>
            <form onSubmit={bookSeat}>
                Nome do Comprador:
                <input
                    data-test="client-name"
                    type="text"
                    required
                    placeholder="Digite seu nome..."
                    value={nome.name}
                    onChange={(event) => setNome({ name: event.target.value })}
                />

                CPF do Comprador:
                <input
                    data-test="client-cpf" 
                    type="text"
                    required
                    placeholder="Digite seu CPF..."
                    value={cpf.cpf}
                    onChange={(event) => setCpf({ cpf: formatCPF(event.target.value) })}
                />
                {cpfInvalid && <ErrorMessage>CPF inválido</ErrorMessage>}
                <button type="submit" disabled={disable} data-test="book-seat-btn">Reservar Assento(s)</button>
            </form>

        </FormContainer>
    )
}


const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    margin: 15px 0;
    font-size: 18px;
    button {
        align-self: center;
        margin-top: 10px;
    }
    input {
        width: calc(100vw - 60px);
    }
    input:nth-child(2){
        margin-bottom: 5px;
    }
    form{
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

  
`
const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;