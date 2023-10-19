import {useState} from "react";
import classes from "./UserInputForm.module.css"

const initialInput = {
  'current-savings': 10000,
  'yearly-contribution': 2000,
  'expected-return': 15,
  'duration':7
}

const UserInputForm = (props) => {
  const [userInput, setUserInput] = useState(initialInput)

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput)

  }

  const resetButtonHandler = () => {
    setUserInput(initialInput)

  }

  const inputChangeHandler = (input, value) => {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [input]:+value,
      };
    })

  }



  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input onChange={(event) => inputChangeHandler("current-savings", event.target.value)} 
          type="number" id="current-savings"  value={userInput['current-savings']}/>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input onChange={(event) => inputChangeHandler("yearly-contribution", event.target.value)}
           type="number" id="yearly-contribution" value={userInput['yearly-contribution']}/>
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input onChange={(event) => inputChangeHandler("expected-return", event.target.value)} 
          type="number" id="expected-return" value={userInput['expected-return']}/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input onChange={(event) => inputChangeHandler("duration", event.target.value)} 
          type="number" id="duration" value={userInput['duration']}/>
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" className={classes.buttonAlt} onClick={resetButtonHandler}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  )
}

export default UserInputForm;
