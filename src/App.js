import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { id: 1, title: "Car wash", amount: 40, date: new Date(2022, 10, 1) },
  { id: 2, title: "Car insurance", amount: 240, date: new Date(2022, 5, 2) },
  { id: 3, title: "Air fare", amount: 940.54, date: new Date(2021, 10, 3) },
  { id: 4, title: "Book", amount: 79.99, date: new Date(2020, 5, 4) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onAddExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
