import { useReducer } from "react"

const initialInputState = {
    value: "",
    isTouched: false,
}

const inputStateReducer = (state, action)=>{
    if(action.type === "INPUT"){
        return { value: action.value, isTouched: state.isTouched}
    }

    if(action.type === "BLUR"){
        return {isTouched: true, value: state.value}
    }

    if(action.type === "RESET"){
        return {isTouched: false, value:""}
    }

    return initialInputState;

}

const useInput = (validateValue) => {

  const [inputState, dispatch] =  useReducer(inputStateReducer , initialInputState)

  const enteredValueIsValid = validateValue(inputState.value)
  const hasError = !enteredValueIsValid  && inputState.isTouched;


  const inputValueChangeHandler = event => {

    dispatch({type:"INPUT", value:event.target.value})

  } 

  const inputBlurHandler = () => {
    dispatch({type: "BLUR"})
  }

  const reset = ()=>{
    dispatch({type: "RESET"})
  }
   

  return{
    value: inputState.value,
    hasError,
    isValid: enteredValueIsValid,
    inputValueChangeHandler,
    inputBlurHandler,
    reset,
  }

}

export default useInput;


// without using useReducer()

// import { useState } from "react"

// const useInput = (validateValue) => {

//   const [enteredValue, setEnteredValue] = useState('');
//   const [isTouched, setIsTouched] = useState(false);

//   const enteredValueIsValid = validateValue(enteredValue)
//   const hasError = !enteredValueIsValid  && isTouched;


//   const inputValueChangeHandler = event => {
//     setEnteredValue(event.target.value)
//   } 

//   const inputBlurHandler = () => {
//      setIsTouched(true);
//   }

//   const reset = ()=>{
//     setEnteredValue('');
//     setIsTouched(false);
//   }
   

//   return{
//     value: enteredValue,
//     hasError,
//     isValid: enteredValueIsValid,
//     inputValueChangeHandler,
//     inputBlurHandler,
//     reset,
//   }

// }

// export default useInput;
