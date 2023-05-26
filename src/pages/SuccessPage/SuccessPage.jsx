import styled from "styled-components"
import { Link } from "react-router-dom"
import { formatCPF } from "../../utils/formatCPF"

export default function SuccessPage({success, setSuccessData}) {
    const { movie, date, hour, client, cpf, seats } = success

    if (seats === undefined) {
        return <div>Carregando...</div>
    }

    const formattedCPF = formatCPF(cpf);

    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer  data-test="movie-info">
                <strong><p>Filme e sessão</p></strong>
                <p>{movie}</p>
                <p>{date} - {hour}</p>
            </TextContainer>

            <TextContainer  data-test="seats-info" >
                <strong><p>Ingressos</p></strong>
                {seats.map((seat, index) => <p key={index}>Assento {seat}</p>)}
            </TextContainer>

            <TextContainer  data-test="client-info">
                <strong><p>Comprador</p></strong>
                <p>Nome: {client}</p>
                <p>CPF: {formattedCPF}</p>
            </TextContainer>

            <Link data-test="go-home-btn" to='/' onClick={() => setSuccessData([])}>
                <button>
                    Voltar para Home
                </button>
            </Link>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    line-height: 28px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`