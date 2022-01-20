import { useState } from "react";
import { StyledLargeButton, StyledRegularButton } from "../../components/Buttons/elements";
import ButtonsContainer from "../../components/Containers/ButtonsContainer";
import { CalculatorContainer, CalculatorDisplay } from "./elements";


const Calculator = props => {

  var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var regularButtons = [7, 8 , 9 ,'DEL', 4, 5, 6, '+', 1 ,2 ,3 , '-'];
  const [state, SetState] = useState('0');
  const [currSymbol, SetCurrSymbol] = useState('');
  const [current, SetCurrent] = useState(0);

 const clickHandler = e => {
    if(digits.includes(e.target.innerText)){
      if(state[0] == '0'){

        SetState(oldState => oldState.substring(1, oldState.length))
      }
     SetState(oldState => oldState + e.target.innerText)
    }

    if(e.target.innerText.includes("DEL")){
      if(state.length == 1){
        SetState('0')
      }
      else{
        SetState(oldState => oldState.substring(0, oldState.length - 1));
      }
     
    }

    if(e.target.innerText.includes("RESET")){
      SetState('0');
    }

    if(e.target.innerText.includes('+')){
        SetCurrent(current += Number(state)) 
        SetCurrSymbol('+')
        SetState('+');
    }

    if(e.target.innerText.includes('-')){
      SetCurrent(current -= Number(state)) 
      SetCurrSymbol('-')
      SetState('-');
  }
        
    if(e.target.innerText == '='){
     
      SetState(oldState =>  currSymbol == '+' ?
                                              Math.abs( (Number(state) + Number(current)) ).toString()
                                              :
                                              Math.abs( (Number(state) - Number(current)) ).toString());
      SetCurrent(0);
    }

  }

    return (
        <CalculatorContainer>
          <CalculatorDisplay {...props}>{state}</CalculatorDisplay>
           <ButtonsContainer>
            {regularButtons.map(x=> (
              <StyledRegularButton onClick={clickHandler} {...props}>{x}</StyledRegularButton>
            ))}
            <StyledLargeButton onClick={clickHandler} background="red">RESET</StyledLargeButton>
            <StyledLargeButton onClick={clickHandler}>=</StyledLargeButton>
            </ButtonsContainer>
       </CalculatorContainer>
      );
}

export default Calculator;