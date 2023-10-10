import classes from "./AddUser.module.css"

import Card from "./Card";
import Button from "./Button";

const AddUser = () => {
    const submitHandler = (event)=>{
        event.preventDefault();

    }

    return <Card className={classes.input}>
        <form onSubmit={submitHandler} className={classes.input}>
            <label htmlFor="username" className={classes['input label']}>Username</label>
            <input className={classes['input input']} id="username" type="text"></input>
            <label htmlFor="age" className={classes['input label']}>Age (Years)</label>
            <input className={classes['input input']} id="age" type="number" step={1}></input>
            <Button type="submit">Add User</Button>
        </form>
    </Card>

}

export default AddUser;