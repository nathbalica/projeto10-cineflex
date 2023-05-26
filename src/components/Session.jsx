import styled from "styled-components"
import { Link } from 'react-router-dom';

export default function Session({weekday, date, showtimes}) {
    return (
        <SessionContainer data-test="movie-day">
            {weekday} - {date}
            <ButtonsContainer>
                {showtimes.map(({id, name: hour}) => (
                    <StyledLink data-test="showtime" key={id} to={`/assentos/${id}`}>
                        <button>{hour}</button>
                    </StyledLink>
                ))}
            </ButtonsContainer>
        </SessionContainer>
    )
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
`
const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`