import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 8, 28);
  const expenseTitle = "Air Fare";
  const expensePrice = 100.8;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
