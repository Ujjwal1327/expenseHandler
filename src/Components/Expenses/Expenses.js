import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    console.log("expense.js");
    setFilterYear(selectedYear);
  };
  const filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  let expensesContent = (
    <p style={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>
      No any Expense of this year
    </p>
  );
  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map((items) => (
      <ExpenseItem
        key={items.key}
        title={items.title}
        amount={items.amount}
        date={items.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesChart expenses={filterExpenses} />
      {expensesContent}
    </Card>
  );
}
