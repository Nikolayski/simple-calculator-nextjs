import styled from "styled-components";

export const StyledButtonsContainer = styled(({...props}) => <section {...props} />)`
    background: hsl(223, 31%, 20%);
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: space-around;
    padding: 35px 20px 20px 20px;
    border-radius: 12px;
`;