import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        
        props.onAddExpense(expenseData);
    }

    const [formToggle, setToggle] = useState(false);

    function showForm() {
        setToggle(true);
    }

    function closeForm() {
        setToggle(false);
    }

    let addExpenseButton = <button onClick={showForm}>Add new expense</button>;
    let expenseForm = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeForm}/>;

    return (
        <div className="new-expense">
            {formToggle ? expenseForm : addExpenseButton}
        </div>
    )
    
        
}

export default NewExpense;