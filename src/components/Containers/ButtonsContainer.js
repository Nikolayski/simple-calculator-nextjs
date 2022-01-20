import { StyledButtonsContainer } from "./elements"

const ButtonsContainer = ({children, ...props}) => {

    return <StyledButtonsContainer {...props}>{children}</StyledButtonsContainer>
}

export default ButtonsContainer;