import { useState } from 'react';
import '../styles/newExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const newExpenseAdding = newExpenseData => {
        props.onExpenseAdding({
            ...newExpenseData, 
            date: new Date(newExpenseData.date), 
            id: Math.random().toString()
        });
    } 

    const [isRendered, setIsRendered] = useState(false);

    const formIsRendered = (bool) => {
        setIsRendered(bool);
    }

    let output = <button onClick={() => setIsRendered(true)}>Add New Expense</button>;

    if (isRendered) {
        output = <ExpenseForm onExpenseAdding={newExpenseAdding} formIsRendered={formIsRendered}/>
    }

    return (
        <div className="new-expense">
            {output}
        </div>
    );
}

export default NewExpense;