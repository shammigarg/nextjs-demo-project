
import useInput from "../hooks/use-input1";

const BasicForm = (props) => {

  const { value: enteredInputName,
    hasError: nameInputHasError,
    isValid: enteredValueIsValid,
    inputValueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput } = useInput(value => value.trim() !== "")

    const { value: enteredInputLastName,
      hasError: lastNameInputHasError,
      isValid: enteredValueLastIsValid,
      inputValueChangeHandler: lastNameInputChangeHandler,
      inputBlurHandler: lastNameBlurHandler,
      reset: resetLastNameInput} = useInput(value => value.trim() !== "")

      const { value: enteredInputEmail,
        hasError: emailInputHasError,
        isValid: enteredEmailIsValid,
        inputValueChangeHandler: emailInputChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput} = useInput(value => value.includes('@'))


  let formIsValid = false;

  if (enteredValueIsValid && enteredValueLastIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return
    }

    console.log("Submitted");

    console.log(enteredInputName, enteredInputLastName, enteredInputEmail)

    resetNameInput();
    resetLastNameInput()
    resetEmailInput()

  }

  const inputNameClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const inputLastNameClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control'
  const inputEmailClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={inputNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
            value={enteredInputName}
            onChange={nameInputChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && <p className="error-text">Please enter valid name</p>}
        </div>
        <div className={inputLastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
          value={enteredInputLastName}
          onChange={lastNameInputChangeHandler}
          onBlur={lastNameBlurHandler}
           />
            {lastNameInputHasError && <p className="error-text">Please enter valid name</p>}
        </div>
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' 
        value={enteredInputEmail}
        onChange={emailInputChangeHandler}
        onBlur={emailBlurHandler}/>
        {emailInputHasError && <p className="error-text">Please enter valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
