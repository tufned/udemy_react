import '../styles/expensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
    const expenses = props.items.map(elem => {
        return (
            <ExpenseItem
                key={elem.id}
                title={elem.title}
                amount={elem.amount}
                date={elem.date}
            />
        )
    });

    if (expenses.length == 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }


    return (
        <ul className='expenses-list'>
            {expenses}
        </ul>
    );
}

export default ExpensesList;