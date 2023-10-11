import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "./Card";
import Button from "./Button";
import ErrorModal from "./ErrorModal";




const AddUser = (props) => {

    const users = [];

    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredUserAge, setEnteredUserAge] = useState("");

    const [error, setError] = useState();
    let user = {
        id: Math.random(),
        name: enteredUserName,
        age: enteredUserAge
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a vaild username and age (non empty values)"
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter age > 0"
            });
            return
        }
        console.log(enteredUserName, enteredUserAge)
        users.push(user);
        console.log(users)
        setEnteredUserAge("");
        setEnteredUserName("");
        props.onSubmitData(users)
    }

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)

    }
    const ageChangeHandler = (event) => {
        setEnteredUserAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null);
    }


    return <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
            <form onSubmit={submitHandler} className={classes.input}>
                <label htmlFor="username" className={classes['input label']}>Username</label>
                <input onChange={usernameChangeHandler} className={classes['input input']} id="username" type="text" value={enteredUserName}></input>
                <label htmlFor="age" className={classes['input label']}>Age (Years)</label>
                <input onChange={ageChangeHandler} className={classes['input input']} id="age" type="number" step={1} value={enteredUserAge}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    </div>

}

export default AddUser;