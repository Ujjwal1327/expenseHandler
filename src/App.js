import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";
const dummy_expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 324,
    date: new Date(2022, 3, 7),
  },
  {
    id: "e2",
    title: "Bike Insurance",
    amount: 224,
    date: new Date(2021, 5, 1),
  },
  {
    id: "e3",
    title: "Stock Insurance",
    amount: 424,
    date: new Date(2020, 8, 11),
  },
  {
    id: "e4",
    title: "Health Insurance",
    amount: 124,
    date: new Date(2021, 6, 2),
  },
  {
    id: "e5",
    title: "Furniture",
    amount: 232,
    date: new Date(2022, 1, 13),
  },
  {
    id: "e6",
    title: "College Fees",
    amount: 524,
    date: new Date(2021, 4, 23),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
