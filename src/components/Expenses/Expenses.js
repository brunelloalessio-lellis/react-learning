import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState(`${new Date().getFullYear()}`);

  const yearFilterChangeHandler = (year) => {
    setYearFilter(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={yearFilter}
        onFilterChange={yearFilterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
