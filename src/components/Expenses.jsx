import ExpenseItem from './ExpenseItem';

import './Expenses.css';

const Expenses = (props) => {

    const renderExpenseItem = arr => {
        return arr.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ));
      };
    
    return (
        <div className="expenses">
            <h1>Expenses</h1>
            {renderExpenseItem(props.expensesArr)}
        </div>
    )
}

export default Expenses;