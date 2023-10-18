
// import useInput from "../hooks/use-input";


// const SimpleInput = (props) => {

//   const { value: enteredName,
//     reset: resetNameInput,
//     valueIsValid: enteredNameIsValid,
//     hasError: nameInputhasError,
//     enteredValueHandler: nameInputValueHandler,
//     InputBlurHandler: nameInputBlurHandler } = useInput(value => {
//       return value.trim() !== "";
//     })


//   const { value: enteredEmail,
//     reset: resetEmailInput,
//     valueIsValid: enteredEmailIsValid,
//     hasError: emailInputhasError,
//     enteredValueHandler: emailInputValueHandler,
//     InputBlurHandler: emailInputBlurHandler } = useInput(value => {
//       return value.includes('@' && '.com');
//     })


//   let formIsValid = false;

//   if (enteredNameIsValid && enteredEmailIsValid) {
//     formIsValid = true;
//   }

//   const formSubmitHandler = event => {
//     event.preventDefault();

//     if (!enteredNameIsValid && !enteredEmailIsValid) {
//       return;
//     }

//     console.log(enteredName)

//     resetNameInput();
//     resetEmailInput()

//   }

//   const nameInputClasses = nameInputhasError ? "form-control invalid" : "form-control"
//   const emailInputClasses = emailInputhasError ? "form-control invalid" : "form-control"
//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor='name'>Your Name</label>
//         <input value={enteredName}
//           type='text' id='name' onChange={nameInputValueHandler}
//           onBlur={nameInputBlurHandler} />
//         {nameInputhasError && <p className="error-text">Please enter valid Input</p>}
//       </div>
//       <div className={emailInputClasses}>
//         <label htmlFor="email"> Your Email </label>
//         <input type="email" id="email"
//           value={enteredEmail}
//           onChange={emailInputValueHandler}
//           onBlur={emailInputBlurHandler} />
//         {emailInputhasError  && <p className="error-text">Please enter valid email</p>}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>

//     </form>
//   );
// };

// export default SimpleInput;
