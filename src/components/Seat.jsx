import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Seat({ seat, handleSeat, isSelected }) {
    const { id, isAvailable, name } = seat;
    const [status, setStatus] = useState("available");

    useEffect(() => {
        if (isSelected) {
            setStatus("selected")
        } else if (isAvailable) {
            setStatus("available")
        } else {
            setStatus("unavailable")
        }
    }, [isSelected])


    return (
        <SeatItem
            key={id}
            onClick={handleSeat}
            status={status}
            data-test="seat"
        >
            {name}
        </SeatItem>
    );
}

const SeatItem = styled.div`
   border: 1px solid ${({ status }) => {
        if (status === "selected") return "#0E7D71";
        if (status === "unavailable") return "#F7C52B";
        return "#808F9D";
    }};         // Essa cor deve mudar
    background-color: ${({ status }) => {
        if (status === "selected") return "#1AAE9E";
        if (status === "unavailable") return "#FBE192";
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
    cursor: pointer;
`