// import { useState } from "react";

// const useInput = (validateValue) => {

// const [enteredValue, setEnteredValue] = useState("");
// const [isTouched, setIsTouched] = useState(false);


// const valueIsValid = validateValue(enteredValue)
// const hasError = !valueIsValid && isTouched



// const enteredValueHandler = event =>{
//     setEnteredValue(event.target.value)
//   }
  
//   const InputBlurHandler = ()=>{
//     setIsTouched(true);
//   }

//   const reset = ()=>{
//     setEnteredValue('');
//     setIsTouched(false)
//   }

//     return {
//         value: enteredValue,
//         reset,
//         valueIsValid,
//         hasError,
//         enteredValueHandler,
//         InputBlurHandler,
//     }

// }

// export default useInput;