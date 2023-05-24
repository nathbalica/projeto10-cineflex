import styled from "styled-components";

export default function Caption(){
    return(
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

    )
}

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