import React, { useState } from 'react';

import "./Expenses.css";
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const[filteredYear, setFilteredYear] = useState('2020');

    function addFilterHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear() === Number(filteredYear));

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onYearSelect={addFilterHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/> 
            </Card>
        </div>
    )
}

export default Expenses;