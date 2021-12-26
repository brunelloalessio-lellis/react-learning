import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState(`${new Date().getFullYear()}`);

  const yearFilterChangeHandler = (year) => {
    setYearFilter(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={yearFilter}
        onFilterChange={yearFilterChangeHandler}
      />
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
