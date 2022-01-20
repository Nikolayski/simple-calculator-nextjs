import styled from "styled-components";

export const CalculatorContainer = styled(({...props}) => <section {...props} />)`
    width: 30%;
    margin: 7% auto;
    font-size: 30px;
    @media (max-width: 1200px){
        width: 50%;
    }
    @media (max-width: 600px){
        width: 70%;
    }
    @media (max-width: 500px){
        width: 80%;
    }
    @media (max-width: 400px){
        width: 90%;
    }
`;

export const CalculatorDisplay = styled(({...props}) => <p {...props} />)`
    background: hsl(224, 36%, 15%);
    font-size: 70px;
    text-align: end;
    padding: 20px;
    border-radius: 12px;
    @media (max-width: 1600px){
        font-size: 55px;
    }
`;

