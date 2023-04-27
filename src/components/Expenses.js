import { useState } from 'react';
import '../styles/expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


function Expenses(props) {
    const [filterValue, setFilterValue] = useState('2022');

    const filterValueFunc = value => {
        setFilterValue(value);
    }

    const filteredExpenses = props.expenses.filter(elem => elem.date.getFullYear().toString() == filterValue);
    

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filterValue} onFilterValueFunc={filterValueFunc} />
            <ExpensesChart expenses={filteredExpenses} />
            <li>
                <ExpensesList items={filteredExpenses} />
            </li>
        </Card>
    );
}

export default Expenses;