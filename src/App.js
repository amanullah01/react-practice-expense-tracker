import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: 1, title: "Car wash", amount: 40, date: new Date(2022, 10, 1) },
    { id: 2, title: "Car insurance", amount: 240, date: new Date(2022, 10, 2) },
    { id: 3, title: "Air fare", amount: 940.54, date: new Date(2022, 10, 3) },
    { id: 4, title: "Book", amount: 79.99, date: new Date(2022, 10, 4) },
  ];
  return (
    <div>
      <h2>Let's get started! Hello Amanullah Aman.</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
