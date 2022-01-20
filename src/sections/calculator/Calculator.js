import { useState } from "react";
import { ThemeContext, useTheme } from "styled-components";
import { StyledLargeButton, StyledRegularButton } from "../../components/Buttons/elements";
import { CalculatorContainer, CalculatorDisplay } from "./elements";


const Calculator = props => {

  var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var regularButtons = [7, 8 , 9 ,'DEL', 4, 5, 6, '+', 1 ,2 ,3 , '-'];
  const [state, SetState] = useState('0');
  const [currSymbol, SetCurrSymbol] = useState('');
  const [current, SetCurrent] = useState(0);

  const theme = useTheme();
  console.log(theme)

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
          <article style={{display: 'flex', justifyContent: 'space-between', fontSize:'30px', marginBottom: '20px'}}>
            <p style={{fontSize: '40px'}}>calc</p>
          </article>
          <CalculatorDisplay {...props}>{state}</CalculatorDisplay>
          <article style={{background: 'hsl(223, 31%, 20%)', display: 'flex', flexWrap: 'wrap', marginTop: '30px', justifyContent:'space-around', padding:'35px 20px 20px 20px', borderRadius: '12px'}}>
            {regularButtons.map(x=> (
              <StyledRegularButton onClick={clickHandler} {...props}>{x}</StyledRegularButton>
            ))}
            <StyledLargeButton onClick={clickHandler} background="red">RESET</StyledLargeButton>
            <StyledLargeButton onClick={clickHandler}>=</StyledLargeButton>
          </article>
       </CalculatorContainer>
      );
}

export default Calculator;