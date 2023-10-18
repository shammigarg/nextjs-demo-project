import { useRef, useState } from "react";
import classes from "./Checkout.module.css"

const isEmpty = value => value.trim() === "";
const isFiveChars = value => value.trim().length === 5;

const CheckoutForm = (props) => {

    const [formValidity, setFormValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true,
    })

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = event => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostal = postalInputRef.current.value
        const enteredCity = cityInputRef.current.value

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredPostalIsValid = isFiveChars(enteredPostal)
        const enteredCityIsValid = !isEmpty(enteredCity)

        setFormValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postal: enteredPostalIsValid,
            city: enteredCityIsValid
        })

        const formIsValid = enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredPostalIsValid &&
            enteredCityIsValid

        if(!formIsValid){
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postal: enteredPostal,
            city: enteredCity
        })

        
    }

    const nameClassesControl = `${classes.control} ${formValidity.name ? "" : classes.invalid}`
    const streetClassesControl = `${classes.control} ${formValidity.street ? "" : classes.invalid}`
    const postalClassesControl = `${classes.control} ${formValidity.postal? "" : classes.invalid}`
    const cityClassesControl = `${classes.control} ${formValidity.city ? "" : classes.invalid}`
    

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameClassesControl}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formValidity.name && <p>Please enter valid name</p>}
            </div>
            <div className={streetClassesControl}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formValidity.street && <p>Please enter valid street</p>}
            </div>
            <div className={postalClassesControl}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef} />
                {!formValidity.postal && <p>Please enter valid postal (five characters long)</p>}
            </div>
            <div className={cityClassesControl}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formValidity.city && <p>Please enter valid city</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );

}


export default CheckoutForm;