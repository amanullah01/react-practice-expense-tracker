import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { id: 1, title: "Car wash", amount: 40, date: new Date(2022, 10, 1) },
    { id: 2, title: "Car insurance", amount: 240, date: new Date(2022, 10, 2) },
    { id: 3, title: "Air fare", amount: 940.54, date: new Date(2022, 10, 3) },
    { id: 4, title: "Book", amount: 79.99, date: new Date(2022, 10, 4) },
  ];

  const onAddExpenseHandler = (expense) => {
    console.log("app.js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
