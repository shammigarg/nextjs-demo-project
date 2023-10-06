import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

// function ExpenseItem() {
//     const expenseDate = new Date(2023, 2, 28);
//     const expenseTitle = "Car Insurance";
//     const expensePrice = 17000

//     return (
//     <div className ="expense-item">
//         <div>{expenseDate.toISOString()}</div>
//         <div className ="expense-item__description">
//             <h2>{expenseTitle}</h2>
//             <div className ="expense-item__price">INR {expensePrice}</div>
//         </div>
//     </div>
//     );
// }


function ExpenseItem(props) {

    return (
    <div className ="expense-item">
        <ExpenseDate date={props.date}/>
        <div className ="expense-item__description">
            <h2>{props.title}</h2>
            <div className ="expense-item__price">${props.amount}</div>
        </div>
    </div>
    );
}


export default ExpenseItem;