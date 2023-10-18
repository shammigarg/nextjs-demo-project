// import { useState, useRef, useEffect } from "react";


// const SimpleInput = (props) => {

// const [enteredName, setEnteredName] = useState("");
// const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
// const [enteredNameTouched, setEnteredNameTouched] = useState(false)

// useEffect(()=>{
//   if(enteredNameIsValid){
//    console.log('Entered name is valid') 
//   }
// }, [enteredNameIsValid])

// const InputValueRef = useRef()

// const nameInputValueHandler = event =>{
//   setEnteredName(event.target.value)
//   if(event.target.value.trim() !== ""){
//     setEnteredNameIsValid(true)
//   }
// }



// const nameInputBlurHandler = ()=>{
//   setEnteredNameTouched(true);

//   if(enteredName.trim() === ""){
//     setEnteredNameIsValid(false)
//   }

// }


// const formSubmitHandler = event =>{
//   event.preventDefault();

//   setEnteredNameTouched(true);

//   if(enteredName.trim() === ""){
//     setEnteredNameIsValid(false)
//     return;
//   }

//   setEnteredNameIsValid(true)
//   console.log(enteredName)

//   const enteredValue = InputValueRef.current.value;
//   console.log(enteredValue)
//   setEnteredName("")
//   // InputValueRef.current.value = "" // Not an ideal way to manipulate the DOM
// }
//  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
//  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control"
//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor='name'>Your Name</label>
//         <input value={enteredName}  
//         ref={InputValueRef}
//         type='text' id='name' onChange={nameInputValueHandler}
//         onBlur={nameInputBlurHandler}/>
//         {nameInputIsInvalid && <p className="error-text">Please enter valid Input</p>}
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
      
//     </form>
//   );
// };

// export default SimpleInput;
