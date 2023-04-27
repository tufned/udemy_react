import { useState } from 'react';
import '../styles/expenseForm.css';


function ExpenseForm(props) {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const titileChangeHandler = e => {
        setUserInput(prevState => {
            return {
                ...prevState,
                title: e.target.value}
        })
    } 
    const amountChangeHandler = e => {
        setUserInput(prevState => {
            return {
                ...prevState,
                amount: +e.target.value
            }
        })
    } 
    const dateChangeHandler = e => {
        setUserInput(prevState => {
            return {
                ...prevState,
                date: e.target.value
            }
        })
    } 


    const submitHandler = e => {
        e.preventDefault();

        props.onExpenseAdding(userInput);

        setUserInput({
            title: '',
            amount: '',
            date: ''
        });

        props.formIsRendered(false)
    }




    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.title} onChange={titileChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" min='0.01' step='0.01' value={userInput.amount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2019-01-01' value={userInput.date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={() => props.formIsRendered(false)}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;