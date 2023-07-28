import Card from '../UI/Card';
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
        <Card className="expenses">
            {renderExpenseItem(props.expensesArr)}
        </Card>
    )
}

export default Expenses;
