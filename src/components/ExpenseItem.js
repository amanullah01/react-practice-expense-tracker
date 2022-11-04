import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>29th September, 2022</div>
      <div className="expense-item__description">
        <h2>Air Fare</h2>
        <div className="expense-item__price">$100.80</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
