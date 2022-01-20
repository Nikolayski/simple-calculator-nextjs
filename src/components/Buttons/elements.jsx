import styled from 'styled-components';

export const StyledRegularButton = styled(({...props}) => <button {...props} />)`
    border-radius: 12px;
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 700;
    width: 21%;
    padding: 20px 10px;
    &:hover{
        cursor: pointer;
    };
    @media (max-width: 1600px){
        font-size:30px;
    };
    @media (max-width: 1350px){
        font-size:20px;
    };
`

export const StyledLargeButton = styled(({background, ...props}) => <button {...props} />)`
    border-radius: 12px;
    margin-bottom: 20px;
    font-size: 25px;
    width: 45%;
    font-weight: 600;
    padding: 20px 10px;
    &:hover{
        cursor: pointer;
    }   
    background: ${({background}) => background};
`;