import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  const [yearFilter, setYearFilter] = useState("");

  const expenses = [
    {
      title: "Car test",
      amount: 111.11,
      date: new Date(2020, 1, 1),
    },
    {
      title: "Car test 2",
      amount: 222.22,
      date: new Date(2021, 2, 3),
    },
    {
      title: "Car test 3",
      amount: 333.33,
      date: new Date(2021, 10, 10),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in App.js");
    console.log(expense);
  };

  const yearFilterChangeHandler = (year) => {
    setYearFilter(year);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onYearFilterChange={yearFilterChangeHandler} />
    </div>
  );
};

export default App;
